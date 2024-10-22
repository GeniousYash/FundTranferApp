import React from 'react'

const data = [
    { name: "Name One", salary: "40,000", edit: "Edit", del: "Delete" },
    { name: "Name Two", salary: "30,000", edit: "Edit", del: "Delete" },
    { name: "Name Three", salary: "25,000", edit: "Edit", del: "Delete" },
    { name: "Name Four", salary: "45,000", edit: "Edit", del: "Delete" },
    { name: "Name Five", salary: "20,000", edit: "Edit", del: "Delete" },
    { name: "Name Six", salary: "60,000", edit: "Edit", del: "Delete" },
    { name: "Name Seven", salary: "80,000", edit: "Edit", del: "Delete" },
    { name: "Name Eight", salary: "55,000", edit: "Edit", del: "Delete" },
    { name: "Name Nine", salary: "50,000", edit: "Edit", del: "Delete" },
]


const DashboardComp = () => {
    return (
        <div className='w-[80%] m-auto flex justify-center my-4'>
            <div className='w-[100%] flex flex-col my-2 px-4 text-xl'>
                {data.map((elem, index) => (
                    <div key={index} className='bg-blue-200 px-4 py-2 flex flex-row justify-between'>
                        <div>{elem.name}</div>
                        <div>{elem.salary}</div>
                        <div className='flex flex-row gap-[20px]'>
                            <div>{elem.edit}</div>
                            <div>{elem.del}</div>
                            <div><input type="checkbox" /></div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default DashboardComp
