import React, { useState } from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

import "./CourseGallery.css";
import CourseDetail from "./CourseDetail";

function CourseGallery(props) {
  console.log("inside Imagegallery", props, props.courses);
  const [Details] = useState("");
  const [showDetails, setShowDetails] = useState(false);
  const [courseSelected, setCourseSelected] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  const handleDetailShowClick = (selectedItem) => {
    console.log("inside click", selectedItem);
    setShowDetails(true);
    courseSelectedforDescription(selectedItem);

    console.log("inside click 2222", showDetails);
  };
  const courseSelectedforDescription = (selectedItem) => {
    console.log("xxxxxprops.courses.id 11", props.courses, selectedItem);
    if (props.courses.id == selectedItem) {
      console.log("xxxxxprops.courses.id", props.courses.id, selectedItem);
      return "selected";
    }
  };

  return (
    <div>
      <div className=" card-list ">
        {props.courses.map((course, i) => (
          <div className="" key={course.id}>
            <Card className="jumbotron " style={{ backgroundColor: "pink" }}>
              <CardBody>
                <CardTitle tag="h5">coursename : {course.coursename}</CardTitle>
                <Button
                  key={course.id}
                  onClick={() =>
                    handleDetailShowClick({ selectedItem: course.id })
                  }
                >
                  View Details
                </Button>
                {showDetails ? <CourseDetail props={course} /> : ""}
                <CardText>
                  Course Description: {course.coursedescription}
                </CardText>
                <CardText>Category: {course.category}</CardText>
                <CardText>
                  Students Enrolled: {course.studentsenrolled}
                </CardText>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  Created By : {course.creator}
                  <br />
                  last Updated :{course.updatedAt}
                </CardSubtitle>
                <CardSubtitle></CardSubtitle>
              </CardBody>
            </Card>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseGallery;
