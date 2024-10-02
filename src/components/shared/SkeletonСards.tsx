"use client";
import React from "react";
import SkeletonImage from "antd/es/skeleton/Image";
import SkeletonInput from "antd/es/skeleton/Input";
import SkeletonButton from "antd/es/skeleton/Button";
import SkeletonAvatar from "antd/es/skeleton/Avatar";
import { Skeleton } from "antd";
const SkeletonСards = () => {
  return (
    <div className="w-full h-full pt-[80px]">
      <div className="container">
        <div className="flex gap-x-4">
          <div>
            <SkeletonImage
              style={{ width: "300px", height: "500px" }}
              active={true}
            />
          </div>
          <div className="flex flex-col gap-y-4">
            <SkeletonInput active={true} />
            <div className="flex gap-x-4 items-center">
              <SkeletonButton active={true} />
              <SkeletonButton active={true} />
              <SkeletonButton active={true} />
            </div>
            <div className="flex items-center gap-x-4 ">
              <SkeletonAvatar
                style={{ width: "70px", height: "70px" }}
                active={true}
              />
              <SkeletonInput active={true} />
              <SkeletonButton active={true} />
            </div>
            <div className="flex items-center gap-x-4">
              <SkeletonAvatar active={true} />
              <SkeletonAvatar active={true} />
              <SkeletonAvatar active={true} />
              <SkeletonButton active={true} style={{ width: "200px" }} />
            </div>
            <div className="flex flex-col py-5 ">
              <Skeleton active />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonСards;
