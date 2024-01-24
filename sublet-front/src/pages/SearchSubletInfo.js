import React, { useEffect } from "react";
import Header from '../components/Header';
import Map from '../components/Map';
import { SubletPostStore } from "../store/SubletPostStore";

function SubletInfo(props) {
  const start_day = new Date(props.start_day);

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex space-x-4">
        <img
          alt="Room"
          className="h-20 w-20 rounded-lg"
          height="80"
          src="/placeholder.svg"
          style={{
            aspectRatio: "80/80",
            objectFit: "cover",
          }}
          width="80"
        />
        <div className="flex flex-col justify-between">
          <h2 className="text-lg font-semibold">{props.title}</h2>
          <p className="text-sm">{
            (props.position !== undefined) ? props.position : props.city + " " + props.gu + " " + props.dong + " " + props.street
          }</p>
          <p className="text-sm">{
            props.city + " " + props.gu + " " + props.dong + " " + props.street
          }</p>
          <p className="text-sm">{start_day.getMonth() + 1}월 {start_day.getDate()}일 부터, 최소 {props.min_duration}개월</p>
          <p className="text-lg font-bold text-[#bd1e59] text-right">₩{props.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}/1개월</p>
        </div>
      </div>
    </div>
  )
}

export default function SearchSubletInfo(props) {
  const asyncGetPost = SubletPostStore((state) => state.asyncGetPost);
  useEffect(() => {
    asyncGetPost();
  }, []);

  const post = SubletPostStore((state) => state.post);
  const postExist = SubletPostStore((state) => state.postExist);

  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto p-5">
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1">
            <div className="flex flex-col space-y-4">
              {postExist && post.map((ele) => <SubletInfo
                key={ele.key}
                title={ele.title}
                position={ele.position}
                city={ele.city}
                gu={ele.gu}
                dong={ele.dong}
                street={ele.street}
                price={ele.price}
                min_duration={ele.min_duration}
                start_day={ele.start_day}
              />)}
            </div>
          </div>
          <div className="col-span-1">
            {postExist && <Map />}
          </div>
        </div>
      </div>
    </>
  );
}

