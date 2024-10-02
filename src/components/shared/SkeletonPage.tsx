import { Skeleton } from "antd";
import SkeletonImage from "antd/es/skeleton/Image";
import React from "react";

const SkeletonPage = () => {
  return (
    <div className="flex flex-col pt-[80px]">
      <div className="container">
        <div className="flex  flex-wrap gap-x-4 gap-y-4">
          <SkeletonImage style={{ width: "200px", height: "250px" }} active />
          <SkeletonImage style={{ width: "200px", height: "250px" }} active />
          <SkeletonImage style={{ width: "200px", height: "250px" }} active />
          <SkeletonImage style={{ width: "200px", height: "250px" }} active />
          <SkeletonImage style={{ width: "200px", height: "250px" }} active />
          <SkeletonImage style={{ width: "200px", height: "250px" }} active />
          <SkeletonImage style={{ width: "200px", height: "250px" }} active />
          <SkeletonImage style={{ width: "200px", height: "250px" }} active />
          <SkeletonImage style={{ width: "200px", height: "250px" }} active />
          <SkeletonImage style={{ width: "200px", height: "250px" }} active />
        </div>
      </div>
    </div>
  );
};

export default SkeletonPage;
