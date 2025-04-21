import { Avatar } from "@mantine/core";

const Working = () => {

    const work = [
        {
            "name": "Build your resume",
            "desc": "Create a standout resume that highlights your skills and experience.",
        },
        {
            "name": "Apply for jobs",
            "desc": "Browse and apply for job openings that match your skills and interests.",
        },
        {
            "name": "Get hired",
            "desc": "Connect with employers and land your dream job.",
        }
    ];

    return (
        <div className="w-full bg-mine-shaft-950 py-16">
            <div className="text-4xl mb-6 text-center font-bold text-mine-shaft-100 [&>span]:text-bright-sun-400">
                How it<span> Works</span>
            </div>
            <div className="text-lg mb-12 mx-auto text-mine-shaft-300 text-center w-3/4">
                Effortlessly navigate through the process and land your dream job.
            </div>
            <div className="flex flex-col lg:flex-row gap-10 px-8 lg:px-16 justify-between items-center">
                <div className="flex-shrink-0 relative">
                    <img src="/Working/Girl.png" alt="girl" className="w-[20rem] lg:w-[30rem] mx-auto" />
                    <div className="w-36 xs-mx:w-28 flex top-[15%] right-0 absolute flex-col items-center gap-1 border border-bright-sun-400 rounded-xl py-3 px-1 backdrop-blur-md">
                    <Avatar className="!h-16 !w-16" src="avatar-7.png" alt="it's me" />
                    <div className="text-sm font-semibold text-mine-shaft-200 text-center">
                        Complete Your Profile
                    </div>
                    <div className="text-xs text-mine-shaft-300">
                        70% Complete
                    </div>

                    </div>
                </div>
                <div className="flex flex-col gap-8">
                    {
                        work.map((item, index) => (
                            <div key={index} className="flex gap-4 items-center p-2  rounded-lg">
                                <div className="flex items-center justify-center p-2 bg-bright-sun-300 rounded-full">
                                    <img
                                        src={`/Working/${item.name}.png`}
                                        alt={item.name}
                                        className="h-16 w-16 p-2"
                                    />
                                </div>
                                <div>
                                    <div className="text-mine-shaft-100 text-xl font-semibold">{item.name}</div>
                                    <div className="text-mine-shaft-300 text-sm mt-2">{item.desc}</div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Working;
