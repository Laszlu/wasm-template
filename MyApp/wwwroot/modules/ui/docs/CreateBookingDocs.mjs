import { inject } from "vue"

export const CreateBookingDocs = {
    template:/*html*/`
    <div class="text-center my-3">
        <div class="flex justify-center">
            <svg class="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                <path fill="#CFD8DC" d="M5 38V14h38v24c0 2.2-1.8 4-4 4H9c-2.2 0-4-1.8-4-4z"/><path fill="#F44336" d="M43 10v6H5v-6c0-2.2 1.8-4 4-4h30c2.2 0 4 1.8 4 4z"/>
                <g fill="#B71C1C"><circle cx="33" cy="10" r="3"/><circle cx="15" cy="10" r="3"/></g>
                <g fill="#B0BEC5"><path d="M33 3c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2s2-.9 2-2V5c0-1.1-.9-2-2-2z"/><path d="M15 3c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2s2-.9 2-2V5c0-1.1-.9-2-2-2z"/></g>
                <g fill="#90A4AE"><path d="M13 20h4v4h-4z"/><path d="M19 20h4v4h-4z"/><path d="M25 20h4v4h-4z"/><path d="M31 20h4v4h-4z"/><path d="M13 26h4v4h-4z"/><path d="M19 26h4v4h-4z"/><path d="M25 26h4v4h-4z"/><path d="M31 26h4v4h-4z"/><path d="M13 32h4v4h-4z"/><path d="M19 32h4v4h-4z"/><path d="M25 32h4v4h-4z"/><path d="M31 32h4v4h-4z"/></g>
            </svg>
            <h2 class="text-3xl ml-3 mb-3">Create Bookings API</h2>
        </div>
        <div class="text-gray-500 text-lg">
            <p>
                Create a new room Booking for our {{serviceName}} hotels.
            </p>
            <p>
                Here are some
                <a class="svg-external text-blue-800" target="_blank"
                    href="https://edition.cnn.com/travel/article/scoring-best-hotel-rooms/index.html">
                    good tips on making room reservations
                </a>
            </p>
        </div>
    </div>
    `,
    setup() {
        const server = inject('server')
        return { serviceName: server.app.serviceName }
    }
}