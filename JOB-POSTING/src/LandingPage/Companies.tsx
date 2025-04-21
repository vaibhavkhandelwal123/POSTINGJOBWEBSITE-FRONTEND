import Marquee from "react-fast-marquee";
const company = [
    
    "Google",
    "Microsoft",
    "Amazon",
    "Slack",
    "Meta",
    "NVIDIA",
    "Samsung",
    "Spotify",
    "Pinterest",
    "Intel",
    "Oracle",
    "Adobe",
    "Salesforce",
    "Netflix"
  ];
const Companies = () => {
  return (
    <div className="mt-20 pb-5">
        <div className="text-4xl mb-10 text-center font-semibold text-mine-shaft-100 [&>span]:text-bright-sun-400 ">
            Trusted by <span>1000+</span> Companies
        </div>
        <Marquee pauseOnHover={true}>
            {company.map((company,index)=>(
                <div key={index} className="mx-8 px-2 py-1 hover:bg-mine-shaft-900 rounded-xl cursor-pointer">
                    <img src={`/Companies/${company}.png`} alt={company} key={index} className="h-14 logo" />
                </div>
            ))}
        </Marquee>
    </div>
  )
}

export default Companies