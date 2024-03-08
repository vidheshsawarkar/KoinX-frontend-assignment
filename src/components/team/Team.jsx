import { Card } from "./Card";
import john from "../../assets/team_member/john_smith.svg"
import elina from "../../assets/team_member/elina_williams.svg"
import john2 from "../../assets/team_member/john_smith2.svg"


export function Team(){
    return <div className="bg-white rounded-lg px-8 py-6 w-full">
        <p className="font-medium text-2xl pb-6">Team</p>
        <p className="font-light text-base pb-6">Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium quam. Facilisis purus convallis quam augue.</p>
        <div>
            <Card image={john} name={"John Smith"} designation={"Software engineer"} about={"Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu"}/>
            <Card image={elina} name={"Elina Willams"} designation={"software engineer"} about={"Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu"}/>
            <Card image={john2} name={"John Smith"} designation={"Software engineer"} about={"Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu"}/>
        </div>
    </div>
}