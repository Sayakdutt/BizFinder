"use client";

import Hero from '@/components/Hero';
import PlaceList from '@/components/PlaceList';
import { useEffect,useState } from 'react';
import Skeleton from '@/components/Skeleton';

export default function Home() {

  const [placeList,setPlaceList] = useState([])
  
  useEffect(()=>{
    getPlaceList('Cafe in Kolkata');
  },[])

  const getPlaceList = async(value:string) => {
    setPlaceList([]);
    const result =  await fetch(`/api/google-place-api?q=${value}`)
    const data = await result.json();
    setPlaceList(data.results);
  }

  return (
    <div>
      <Hero userInput={(value:string)=>getPlaceList(value)} />
      {PlaceList?<PlaceList placeList={placeList}/>:null}
      {placeList?.length == 0 ?
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {[1,2,3,4,5,6,7,8,9].map((item,index)=>(
          <Skeleton key={index}/>
        ))}
      </div>:null}
    </div>
    )
}
