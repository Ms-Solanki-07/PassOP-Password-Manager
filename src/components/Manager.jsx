import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import Footer from './Footer';

const Manager = () => {
    const ref = useRef()
    const passwordRef = useRef()
    const [form, setForm] = useState({ site: "", username: "", password: "", id: "" })
    const [passwordArray, setPasswordArray] = useState([])

    const getPassword = async () => {
        const req = await fetch("http://localhost:3000/")
        let passwords = await req.json();
        console.log(passwords)
        setPasswordArray(passwords)
    }


    useEffect(() => {
        getPassword()
    }, [])


    const togglePass = () => {
        if (ref.current.src.includes("icons/hidden.png")) {
            ref.current.src = "icons/eye.png"
            passwordRef.current.type = "password"
        } else {
            passwordRef.current.type = "text"
            ref.current.src = "icons/hidden.png"
        }
    }

    const savePassword = async () => {
        if (form.site.length > 3 && form.username.length > 3 && form.password.length > 3) {
            setPasswordArray([...passwordArray, { ...form, id: uuidv4() }])
            await fetch("http://localhost:3000/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ ...form, id: uuidv4() })
            })

            // if any such id exists in the db, then delete it
            await fetch("http://localhost:3000/", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({id:form.id})
            })

            // localStorage.setItem("passwords", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]))
            setForm({ site: "", username: "", password: "", id: "" })
            toast('Password Saved!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        } else {
            toast('Password Not Saved!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    }

    const deletePassword = async (id) => {
        let ch = confirm("Do you really want to delete password.")
        if (ch) {
            console.log("deleting password with id: ", id)
            setPasswordArray(passwordArray.filter(item => item.id != id))
            let res = await fetch("http://localhost:3000/", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({id})
            })
            // localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item => item.id != id)))
            toast('Password Deleted', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    }

    const editPassword = (id) => {
        console.log("editing password with id: ", id)
        setForm({...passwordArray.filter(i => i.id === id)[0], id: id})
        setPasswordArray(passwordArray.filter(item => item.id != id))
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const copyText = (text) => {
        toast('Copied to clipboard', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        navigator.clipboard.writeText(text)
    }



    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <div className="absolute top-0 z-[-2] h-screen w-[100%]"></div>

            <div className="mycontainer text-center min-h-[calc(100vh-95px)]">
                <h1 className='font-bold text-xl mt-8'>
                    <span className='text-green-600'>&lt;</span>
                    <span className='text-white'>Pass</span>
                    <span className='text-green-600'>OP/&gt;</span>
                </h1>
                <p className='text-lg text-green-600'>Your own Password Manager</p>

                <div className="text-black flex flex-col p-4 gap-6 items-center">
                    <input value={form.site} onChange={handleChange} placeholder='Enter the Website URL' className='rounded-full border border-green-700 p-4 py-1.5 w-full' type="text" id='site' name='site' />
                    <div className="flex flex-col md:flex md:flex-row  gap-6 justify-between w-full">
                        <input value={form.username} onChange={handleChange} placeholder='Enter the Username' className='rounded-full border border-green-700 p-4 py-1.5 w-full' type="text" id='username' name='username' />

                        <div className="relative">
                            <input ref={passwordRef} value={form.password} onChange={handleChange} placeholder='Enter Password' className='rounded-full border border-green-700 p-4 py-1.5 md:w-70 w-full' type="password" id='password' name='password' />

                            <span className="absolute right-[8px] top-[5px]">
                                <img ref={ref} onClick={togglePass} className=' cursor-pointer' width={25} src="icons/eye.png" alt="" />
                            </span>
                        </div>
                    </div>
                    <button onClick={savePassword} className='flex justify-center items-center gap-2 bg-green-500 hover:bg-green-600 px-5 py-1 rounded-full w-fit border border-green-900'>
                        <lord-icon
                            src="https://cdn.lordicon.com/efxgwrkc.json"
                            trigger="hover">
                        </lord-icon>
                        Save Password</button>
                </div>
                <div className="passwords text-white">

                    {passwordArray.length === 0 && <h2 className='font-bold text-xl py-3 text-left'>Not Password to show...</h2>
                    }
                    {passwordArray.length != 0 && <>
                        <h2 className='font-bold text-xl py-3 text-left'>Your Passwords...</h2>
                        <table className="table-auto w-full rounded-lg overflow-hidden">
                            <thead className='bg-green-800 '>
                                <tr>
                                    <th className="py-2 border border-green-900 w-[40%]">Site</th>
                                    <th className="py-2 border border-green-900 w-[25%]">Username</th>
                                    <th className="py-2 border border-green-900 w-[25%]">Password</th>
                                    <th className="py-2 border border-green-900 w-[10%]">Actions</th>
                                </tr>
                            </thead>
                            <tbody className='bg-green-700'>
                                {passwordArray.map((item, index) => {
                                    return <tr key={index} className="break-words">

                                        <td className='p-2 border border-green-900 text-left align-top w-[40%] break-words'>
                                            <div className='flex justify-between'>
                                                <a className='break-all' href={item.site} target="_blank">{item.site}</a>
                                                <img onClick={() => { copyText(item.site) }} className='cursor-pointer w-5 h-5' src="icons/copy.png" alt="" />
                                            </div>
                                        </td>

                                        <td className='p-2 border border-green-900 text-left align-top w-[25%] break-words'>
                                            <div className='flex justify-between'>
                                                <span className="break-all">{item.username}</span>
                                                <img onClick={() => { copyText(item.username) }} className='cursor-pointer w-5 h-5' src="icons/copy.png" alt="" />
                                            </div>
                                        </td>
                                        <td className="p-2 border border-green-900 text-left align-top w-[25%] break-words">
                                            <div className='flex justify-between'>
                                                <span className="break-all text-xl">{'*'.repeat(item.password.length)}</span>
                                                <img onClick={() => { copyText(item.password) }} className='cursor-pointer w-5 h-5' src="icons/copy.png" alt="" />
                                            </div>
                                        </td>

                                        <td className='p-2 border border-green-900 text-center align-top w-[10%]'>
                                            <span className='cursor-pointer mx-1' onClick={() => { editPassword(item.id) }}>
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/gwlusjdu.json"
                                                    trigger="hover"
                                                    style={{ "widht": "25px", "height": "25px" }}>
                                                </lord-icon>
                                            </span>
                                            <span className='cursor-pointer mx-1' onClick={() => { deletePassword(item.id) }}>
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/skkahier.json"
                                                    trigger="hover"
                                                    style={{ "widht": "25px", "height": "25px" }}>
                                                </lord-icon>
                                            </span>

                                        </td>
                                    </tr>
                                })}
                            </tbody>
                        </table></>}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Manager
