"use client"
import { Button } from '@/components/ui/button'
import React, { useContext, useEffect, useState } from 'react'
import { HiClipboardDocumentCheck, HiLightBulb, HiMiniSquares2X2 } from 'react-icons/hi2'
import SelectCategory from './_components/SelectCategory'
import TopicDescription from './_components/TopicDescription'
import SelectOption from './_components/SelectOption'
import { UserInputContext } from '../_context/UserInputContext'

function CreateCourse() {
    const { userCourseInput, setUserCourseInput } = useContext(UserInputContext);
    /*
    * Used to check next button enable or disable status
    */
    const checkStatus = () => {
        if (userCourseInput?.length == 0) {
            return true;
        }
        if (activeIndex == 0 && (userCourseInput?.category?.length == 0 || userCourseInput?.category == undefined)) {
            return true
        }
        if (activeIndex == 1 && (userCourseInput?.topic?.length == 0 || userCourseInput?.topic == undefined)) {
            return true
        }
        else if (activeIndex == 2 && (userCourseInput?.level == undefined || userCourseInput?.duration == undefined || userCourseInput?.displayVideo == undefined  || userCourseInput?.noOfChapters == undefined)) {
            return true
        }
        return false;

    }

    const StepperOptions = [
        {
            id: 1,
            name: 'Category',
            icon: <HiLightBulb />
        },
        {
            id: 2,
            name: 'Topic & Desc',
            icon: <HiMiniSquares2X2 />
        },
        {
            id: 3,
            name: 'Options',
            icon: <HiClipboardDocumentCheck />
        },]

    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        console.log(userCourseInput)
    }, [userCourseInput])
    return (
        <div>

            {/*Stepper*/}
            <div className='flex flex-col justify-center items-center mt-10'>
                <h2 className='text-4xl text-primary font-medium'>Create Course</h2>
                <div className='flex mt-10'>
                    {StepperOptions.map((item, index) => (
                        <div className='flex items-center'>
                            <div className='flex flex-col items-center w-[50px] md:w-[100px]'>
                                <div className={`bg-gray-200 text-white p-3 rounded-full
                                    ${activeIndex >= index && 'bg-purple-500'}`}>

                                    {item.icon}
                                </div>
                                <h2 className='hidden md:block md text-sm'> {item.name}</h2>
                            </div>
                            {index != StepperOptions?.length - 1 && <div className={`h-1 w-[50px] rounded-full lg:w-[170px] bg-gray-300
                            ${activeIndex > index && 'bg-purple-500'}`}></div>}

                        </div>
                    ))}
                </div>
            </div>
            <div className='px-10 md:px-20 lg:px-44 mt-10'>
                {/* Component*/}
                {activeIndex == 0 ? <SelectCategory /> :
                    activeIndex == 1 ? <TopicDescription /> : <SelectOption />}

                {/* Next Previous Button*/}

                <div className='flex justify-between mt-10'>
                    <Button disabled={activeIndex == 0} variant='outline' onClick={() => setActiveIndex(activeIndex - 1)}>Previous</Button>
                    {activeIndex < 2 && <Button disabled={checkStatus()} onClick={() => setActiveIndex(activeIndex + 1)}>Next</Button>}
                    {activeIndex == 2 && <Button disabled={checkStatus()} onClick={() => setActiveIndex(activeIndex + 1)}>Generate Course Layout</Button>}
                </div>
            </div></div>
    )
}

export default CreateCourse