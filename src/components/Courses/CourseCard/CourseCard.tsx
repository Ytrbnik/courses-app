import Button from "../../../common/Button/Button";

import './CourseCard.css'

interface CourseCardProps {
    id: string;
    title: string;
    description: string;
    creationDate: string;
    duration: number;
    authorNames: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
    id,
    title,
    description,
    creationDate,
    duration,
    authorNames,
}) => {
    const handleClick = () => {
        console.log('Click');
    };

    return (
        <li className="coursecard" key={id}>
            <div className="leftside">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <div className="rightside">
                <div>
                    <h3>Authors:</h3>
                    <p>{authorNames}</p>
                </div>
                <div>
                    <h3>Duration:</h3>
                    <p>{duration}</p>
                </div>
                <div>
                    <h3>Created:</h3>
                    <p>{creationDate}</p>
                </div>
                <div>
                    <Button buttonText="Show course" onClick={handleClick} />
                </div>
            </div>
        </li>
    );
};

export default CourseCard;