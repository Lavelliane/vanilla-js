const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
let ticketPrice = +movieSelect.value;
const confirmBtn = document.querySelector('.confirm');

loadOccupiedSeats();


//Update total and count
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const selectedSeatsCount = selectedSeats.length;
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}
function getSelectedSeatsIndex(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));
    return seatsIndex;
}
function getOccupiedSeatsIndex(){
    const occupiedSeats = document.querySelectorAll('.row .seat.occupied');
    const seatsIndex = [...occupiedSeats].map((seat) => [...seats].indexOf(seat));
    return seatsIndex;
}
function updateMovieData(){
    const movieObject = {};
    movieObject.movieIndex = movieSelect.selectedIndex;
    movieObject.moviePrice = movieSelect.value;
    movieObject.movieOccupiedSeats = getOccupiedSeatsIndex();
    localStorage.setItem(`movieNumber${movieSelect.selectedIndex}`,JSON.stringify(movieObject));

}
function occupySeats(){
    const selectedSeats = getSelectedSeatsIndex();
    seats.forEach((seat, index) => {
        if(selectedSeats.indexOf(index) > -1){
            seat.classList.add('occupied');
        }
    })
}
function resetPage(){
    count.innerText = '0';
    total.innerText = '0';
    seats.forEach((seats) => seats.classList.remove('selected'));
}
function loadOccupiedSeats(){
    const movieDataObj = localStorage.getItem(`movieNumber${movieSelect.selectedIndex}`);
    if(movieDataObj === null || movieDataObj.length === 0){
        seats.forEach((seat) => seat.classList.remove('occupied'));
        return;
    }
    const occupiedSeatsOfMovie = JSON.parse(movieDataObj).movieOccupiedSeats;
    seats.forEach((seat, index) => {
        if(occupiedSeatsOfMovie.indexOf(index) > -1){
            seat.classList.add('occupied');
        }else{
            seat.classList.remove('occupied');
        }
    });
}

//Movie select event
movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;
    loadOccupiedSeats();
});

//Seat click event
container.addEventListener('click', (e) => {
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected');
        updateSelectedCount();
    }
});
confirmBtn.addEventListener('click', () => {
    occupySeats();
    updateMovieData(); 
    resetPage();
});

