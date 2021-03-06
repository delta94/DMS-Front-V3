import React from 'react';

import './GoingOut.scss'

import Woman from '../../../assets/illust/admin-1.png'
import arrow from '../../../assets/icon/ic_arrow.png'
import xicon from '../../../assets/icon/ic_x.png'

const GoingOut = ({onModalToggle, modal, modalData, PageList, AllCheck, HandleAllToggle, HandleSelectToggle, selected, goingOutData, data, selectData, selectState}) => {
    return (
        <React.Fragment>
            {
                modal && 
                <div className = "goingout--modal--wrapper">
                    <div onClick = {onModalToggle} className = "goingout--modal--background"/>
                    <div className = "goingout--modal">
                        <div className = "goingout--modal--header--wrapper">
                            <div className = "goingout--modal--studentinfo--wrapper">
                                <span className = "goingout--modal--studentinfo--studentnumber">
                                    {modalData.studentNumber}
                                </span>
                                <div className = "goingout--modal--studentinfo--studentname">
                                    <span>
                                        {modalData.studentName}
                                    </span>
                                </div>
                            </div>
                            <div onClick = {onModalToggle} className = "goingout--modal--close--wrapper">
                                <img className = "goingout--modal--close" src = {xicon} alt = "x"/>
                            </div>
                        </div>
                        <div className = "goingout--modal--reason--wrapper">
                            <span>외출사유 : </span>
                            <div className = "goingout--modal--reason">
                                {modalData.reason}
                            </div>
                        </div>
                        <div className = "goingout--modal--time--wrapper">
                            <span>외출시간 : </span>
                            <div className = "goingout--modal--time">
                                {modalData.goOutDate} ~ {modalData.returnDate}
                            </div>
                        </div>
                        <div className = "goingout--modal--button--wrapper">
                            <div className = "goingout--modal--button accept">외출허가</div>
                            <div className = "goingout--modal--button refuse">외출거절</div>
                        </div>
                    </div>
                </div>
            }
            <div className = "goingout--button--wrapper">
                <div className = "goingout--button--detail goingout">
                    <div className = "goingout--button">외출자관리</div>
                    <img src = {Woman} alt = "goingout" className = "goingout--button--illust"/>
                </div>
            </div>
            <div className = "goingout--wrapper">
                <div className = "goingout--header--wrapper">
                    <div className = "goingout--header--content content--number">
                        번호
                    </div>
                    <div className = "goingout--header--content content--name">
                        이름
                    </div>
                    <div className = "goingout--header--content content--schoolnumber">
                        학번
                    </div>
                    <div className = "goingout--header--content content--time">
                        외출시간
                    </div>
                    <div className = "goingout--header--content content--check">
                        확인여부
                    </div>
                    <div className = "goingout--header--content content--delete">
                        삭제
                    </div>
                </div>
                <div className = "goingout--content--wrapper">
                    {goingOutData}
                </div>
                <div className = "goingout--footer--wrapper">
                    <div className = "goingout--buttons--all--wrapper">
                        <div className = "goingout--buttons--wrapper">
                            {data}  
                        </div>
                        <div className = "goingout--selected--list--wrapper">
                            <div onClick = {HandleSelectToggle} className = "goingout--select--wrapper">
                                {selectState}
                                <img className = "goingout--select--icon" alt = "arrow" src = {arrow}/>
                            </div>
                            {   selected &&
                                <div className = "goingout--selected--wrapper">
                                    {selectData}
                                </div>
                            }
                        </div>
                        <div onClick = {HandleAllToggle} className = "admin-goingout--button--wrapper">
                            <span className = "admin-goingout--button--text">
                                전체
                            </span>
                            <input id = "goingout-button" className = "admin-goingout--button" type = "checkbox" checked = {AllCheck} readOnly/>
                            <div className = "admin-goingout--buttons">
                                <div className = "admin-goingout-buttons-inner"/>
                            </div>
                        </div>
                    </div> 
                    <div className = "goingout--pagelist--wrapper">
                        {PageList}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default GoingOut;