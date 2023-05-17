import Button from "../../../../common/Button/Button";


const AddNewCourse = () => {
    const handleClick = () =>{
        console.log('click');
    }

    return(
        <Button className="addNewCourseBtn" buttonText="Add new course" onClick={handleClick}/>
    )
}

export default AddNewCourse;