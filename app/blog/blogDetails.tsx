import React from "react";
import "./blogDetails.scss";

function BlogDetails({ blogId, setActiveBlog }: any) {
  return (
    <div className={`blog-details-container ${blogId != 0 ? "active" : ""}`}>
      <div className="blog-details">
        <div
          className="close-icon d-f-c hover"
          onClick={() => setActiveBlog(0)}
        >
          X
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;
