"use client";
import SkeletonNode from "antd/es/skeleton/Node";
import React from "react";
const SkeletonCards = () => {
  return (
    <div className="flex gap-x-4 ">
      <SkeletonNode style={{ width: "200px", height: "250px" }} active className="rounded-xl" />
      <SkeletonNode style={{ width: "200px", height: "250px" }} active className="rounded-xl" />
      <SkeletonNode style={{ width: "200px", height: "250px" }} active className="rounded-xl" />
      <SkeletonNode style={{ width: "200px", height: "250px" }} active className="rounded-xl" />
    </div>
  );
};

export default SkeletonCards;
