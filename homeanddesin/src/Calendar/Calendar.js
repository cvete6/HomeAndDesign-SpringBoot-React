import "react-big-calendar/lib/css/react-big-calendar.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import React, {Component, useEffect, useState} from 'react';
import {Link, Redirect,useHistory} from 'react-router-dom';
import "./Calendar.css";
import axios from "../custom-axios/axios";
import Event from "./Event";
import ProjectsService from "../repository/axiosProjectRepository";

class MyCalendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nastan: []
        }
    }

    componentDidMount() {
        this.loadProjects();
        //console.log(this.NewTerm);
        //this.EventsDate;
       // this.EventsTitle;
    }

   /* EventsTitle (){
        this.setState({
            title: this.state.projects.map((p, index) => {p.name})
        });


    EventsDate(){
            this.setState({
                    date: this.state.projects.map((p, index) => {p.from;})
                }
            );
            console.log(this.state.date);
    }

     NewTerm = {
        "title": this.state.title.map((t,index) =>{
            t.value
        }),
         "date": this.state.date.map((d,index) =>{
             d.value;
         })
    }
    formatEvents() {
        return this.props.appointments.map(appointment => {
            const {title, end, start} = appointment

            let startTime = new Date(start)
            let endTime = new Date(end)

            return {
                title,
                start: startTime,
                end: endTime,
                extendedProps: {...appointment}
            }
        })
    }
*/


    loadProjects = () => {
        ProjectsService.fetchProjectsEvents().then((response) => {
            //console.log(response)
            this.setState({
                nastan: response.data,
            })
            console.log(this.state.nastan);

        }).catch(error => {
            console.log(error)
        });
    }

Nastani (){
        return    this.state.nastan.map((i, index) => {

        const {title, end, start} = i;
            console.log(i);

        let startTime = i[2]
        let endTime = i[1]
        let Title = i[0]
        return {
            title: Title,
            start: startTime,
            end: endTime,
            extendedProps: {...i}
        };
    })

}

    render() {
        return (
            <div className="container-sm mt-5 pt-xl-5 w-75">
                <FullCalendar
                    defaultView="dayGridMonth" plugins={[dayGridPlugin]}
                    events={this.Nastani() }
                />

            </div>

        )
    }
}
export default MyCalendar;
/*events={[
                        {title: "naslov" , date: '2020-04-10'}
                    ]}


                     events={[
                        {title: "naslov", date:{projects}}
                    ]}*/
/*
*
* import { render } from "react-dom";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
*
moment.locale("en-GB");
const localizer = momentLocalizer(moment);

class MyCalendar extends Component {

    constructor(props) {
        super(props)

        this.state = {
            cal_events: [
                //State is updated via componentDidMount
            ],
        }

    }



    render() {


        return (
            <div >
                <div style={{ height: 400 , width: 600}}>
                    <Calendar
                        localizer={localizer}
                        events={[
                            {
                                title: "My event",
                                allDay: false,
                                start: new Date(2020, 1, 1, 8, 0), // 10.00 AM
                                end: new Date(2020, 0, 1, 14, 0) // 2.00 PM
                            }
                        ]}
                        step={30}
                        defaultView='month'
                        views={['month','week','day']}
                        defaultDate={new Date()}
                        min={new Date(2020, 1, 1, 8, 0)} // 8.00 AM
                        max={new Date(2020, 12, 1, 17, 0)}
                        timeslots={3}
                        view="month"
                    />
                </div>
            </div>
        );
    }
}
*/
