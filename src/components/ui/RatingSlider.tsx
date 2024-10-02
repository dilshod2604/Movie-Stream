"use client"
import { Slider, SliderSingleProps } from 'antd'
import React from 'react'
interface RatingSliderProps{
    value:number
    setValue:React.Dispatch<React.SetStateAction<number>>
}
const RatingSlider:React.FC<RatingSliderProps> = ({setValue,value}) => {

    const marks: SliderSingleProps['marks'] = {
        0: '0%',
        1: '10%',
        2: '20%',
        3: '30%',
        4:'40%',
        5:'50%',
        6:'60%',
        7:'70%',
        8:'80%',
        9:'90%',
        10:'100%'

      };

      const changeColor = (): string=> {
        const ranges: { [key: string]: [number, number] } = {
          red: [0, 4],
          orange: [5, 7],
          green: [8, 10],
        };
      
        for (const color in ranges) {
          const [min,max] = ranges[color];
          if (value > min && value <= max) return color;
        }
      
        return "Invalid value";
      };
      

  return (

   <Slider
   defaultValue={value}
   onChange={setValue}
   marks={marks}
   min={1}
   max={10}
   styles={{
    track:{
        background:"transparent",
    },
    tracks:{
        background:changeColor()
    }
   }}
   
   />
  )
}

export default RatingSlider