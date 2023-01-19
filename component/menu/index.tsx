import { useState, useEffect } from "react";
import { LandInfo, LandItem , LandSchema } from './LandItem';
import { FilterPane } from './FilterPane';
import { LandDetails } from './LandDetails';
import { Transition } from '@headlessui/react';
import { firebaseClient } from "../../lib/firebaseClient";
import { useActiveSelection } from '../../utils/useActiveSelection';
import { useStateSelection } from "../../utils/useStateSelection";

export default function LandsMenu() {
    const { active, setSelection } = useActiveSelection();
    var [land, setLand] = useState<Array<LandSchema>>([]);
    const [search,setSearch] = useState<String>();

const get = async() => {
        const cityRef = firebaseClient.firestore().collection("lands");
        const doc = await cityRef.get();
        if(doc){
            doc.forEach((d) => {
                const data = Object.keys(d.data()).sort().reduce(
                    (obj:any,key:any) => {
                        obj[key] = d.data()[key];
                        return obj;
                    },{}
                )
                console.log("the data is: ",data.branch);
                land.push(data);
                console.log("the land is: ",land)
            })
        }
    }

    useEffect(() => {
        get();        
    } , [get])

    return (
        <>
            <div className="h-full w-64 rounded-2xl cursor-default overflow-hidden ring-1 ring-blue-200 shadow-2xl flex flex-col">
                <FilterPane/>
                <div className="overflow-y-scroll">
                    <div className="bg-blue-100 divide-y divide-blue-200">
                        {land.map((l, index) => {
                            return(
                                <LandItem
                                key={index}
                                info={{
                                    name: l.branch+l.deed_number,
                                    location: {
                                        city: l.branch,
                                        state: l.state,
                                    },
                                    count: 0,
                                    active: active == index,
                                }}
                                onclick={(e) => setSelection(index)}
                            />
                            )
                        })}
                        {/* {land.map((e) => {
                            return(<h1>{e.branch}</h1>);
                        })} */}
                    </div>
                </div>
            </div>
            <Transition
                show={active > -1}
                className="absolute top-2 sm:m-0 sm:inset-0 w-64 sm:w-96 sm:relative"
                enter="transition-transform transform-gpu ease-out"
                enterFrom="-translate-x-2"
                enterTo="translate-x-0"
                leave="transition-transform transform-gpu ease-out"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-2"
            >
                <LandDetails close={(e) => setSelection(-1)} />
            </Transition>
        </>
    );
}
