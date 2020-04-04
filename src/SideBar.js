import {sinify, divideScale} from './util'
import React from 'react'

const sideBarStyle = (w, h, i, scale) => {
    const sc = divideScale(sinify(scale), i, 2)
    const wUpdate = w * sc
    const x = (w - wUpdate) * i
    const y = (h / 2) * i
    const width = `${wUpdate}px`
    const height = `${h / 2}px`
    const left = `${x}px`
    const top = `${y}px`
    const position = 'absolute'
    const background = '#3F51B5'
    return {position, left, top, width, height, background}
}

const SideBar = ({w, h, scale, i}) => {
    return (<div style = {sideBarStyle(w, h, i, scale)}></div>)
}

export default SideBar
