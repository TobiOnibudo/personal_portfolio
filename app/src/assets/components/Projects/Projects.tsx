import "../../../Styles/Projects.css"
import Project from "./Project";
import book from "../../../img/Book-img.png"
import { FaHtml5 } from "react-icons/fa6";

function Projects()
{
    return (
        <div className="projects">
            <h3 className="portfolioTitle"> My Personal Projects</h3>

            <div className="portfolio">
            <Project 
                Title="Personal Library" 
                description="This is a personal book library made for
                users to keep track of books they are interested in and have read. This would be really
                useful for fellow avid readers as it can be quite hard to keep track of hardcopy books 
                in their library." image={book} link = {"https://github.com/TobiOnibudo/Book"}
                stack={[
                    { id : 0 ,reactIcon:<FaHtml5  className="stackIcon"/>},
                    {id:1,reactIcon:<FaHtml5  className="stackIcon"/>}
                ]} 
            />

            <Project 
                Title="Personal Library" 
                description="This is a personal book library made for
                users to keep track of books they are interested in and have read. This would be really
                useful for fellow avid readers as it can be quite hard to keep track of hardcopy books 
                in their library." image={book} link = {"https://github.com/TobiOnibudo/Book"}
                stack={[
                    { id : 0 ,reactIcon:<FaHtml5  className="stackIcon"/>},
                    {id:1,reactIcon:<FaHtml5  className="stackIcon"/>}
                ]} 
            />
            </div>
        </div>
    )
}


export default Projects;