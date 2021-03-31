import React,{useRef,useEffect} from 'react'
import {TweenMax, Power3, } from 'gsap'
import logoo from '../../public/image/plan.svg'
import plan from '../../public/image/plan1.svg'
import Mininfo from './MinInfo'
const MoreInfo = () => {

    let logo = useRef(null)


    useEffect(()=>{
        // TweenMax.to(logo,.8,{
        //     opacity:1,
        //     y:20,
        //     ease:Power3.easeOut
        // })
    },[])

    return (
        <div className="moreInfo">
            
            <h1 ref={el=>{logo = el}}>Systems Thinking.</h1>

            <Mininfo pic={logoo} desc={'We may be tech experts, but our process takes far more than technology into account. We start with your long-term business goals, focus next on the people using your systems, and only then turn our attention to your architecture and applications. It takes a little longer up-front, but saves time and headaches down the line – because even the most elegantly designed system is only as good as the people using it day‑to‑day.'}/>

            <Mininfo pic={plan} desc={'If you’re looking for IT generalists, look elsewhere. We live and breathe Microsoft cloud solutions, and we know everything there is to know about them (seriously, quiz us). In an industry that’s always evolving, we stay neck-to-neck with every new cloud service offering and technology evolution — not just because it’s our job, but because it satisfies the deepest hunger for knowledge in our technophile hearts.'}/>

        </div>
    )
}

export default MoreInfo
