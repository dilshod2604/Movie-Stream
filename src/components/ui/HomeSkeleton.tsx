import { Skeleton } from "antd";
import SkeletonNode from "antd/es/skeleton/Node";
import React from "react";
const HomeSkeleton = () => {
  return (
    <div className="w-full pt-[80px]">
      <div className="container">
        <div className="flex flex-col items-center gap-y-5">
          <SkeletonNode style={{ width: "300px", height: "200px" }} active />
          <Skeleton active />
        </div>
      </div>
    </div>
  );
};

export default HomeSkeleton;
