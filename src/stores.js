import { writable } from 'svelte/store'

let slidersData
slidersData = JSON.parse(localStorage.getItem("sliders")) || [ {name: "", value: 5} ]

export let sliders = writable(slidersData)