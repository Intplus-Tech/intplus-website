

const CoreValues = () => {

    const values = [
        {
            title: 'Vision',
            description: 'To empower businesses and individuals through innovative software solutions that seamlessly integrate technology into everyday life, fostering a future where human potential is amplified.',
        },
        {
            title: 'Mission',
            description: "We strive to create intuitive, reliable, and user-centric software that solves real-world problems, drives efficiency, and unlocks new opportunities. We are committed to fostering a collaborative environment where creativity thrives, pushing the boundaries of what's possible through cutting-edge technology and a passion for excellence.",
        }
    ]
    return (
        <div className="w-full h-auto bg-white p-7 lg:px-20 lg:p-0 flex flex-col gap-y-7 text-[#333333]">
            {
                values.map((value) => (
                    <div key={value.title}>
                        <p className="font-medium text-[20px]">{value.title}</p>
                        <p className="text-[16px] mt-2">{value.description}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default CoreValues