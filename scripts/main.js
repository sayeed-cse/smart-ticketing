function busSeat(seat_id) {
    const seat = document.getElementById(seat_id);
    const is_selected = seat.classList.contains('button-active');
    // console.log(is_selected)
    if (is_selected === false) {
        seat.classList.add('button-active');

        // get selected seat name 
        const seat_name = getElementText(seat_id);

        // showing selected seat
        const selected_seat = document.getElementById('selected-seat');
        const new_tr = document.createElement('tr');
        new_tr.innerHTML = `
        <td class="text-lg">${seat_name}</td>
        <td class="text-lg">Economoy</td>
        <td class="text-right text-lg">550</td>
    `;
        selected_seat.appendChild(new_tr);
        const total_selected_seat = selected_seat.childNodes.length;

        setElementTextValue('seat-selected-total', total_selected_seat);

        // setting total price to pay
        const total_price = 'total-price';

        const new_total_price = 550 * total_selected_seat;
        console.log(new_total_price);
        setElementTextValue(total_price, new_total_price);

        const seatsLeft = 40 - total_selected_seat;
        setElementTextValue('seats-left', seatsLeft);
    }
    

}

const coupon_input = document.getElementById('coupon-input');
coupon_input.addEventListener('keyup', function (event) {
    const inputText = event.target.value;
    // get total price
    const total_price = getElementTextValue('total-price');
    // console.log(total_price);

    // coupon apply btn
    const coupon_apply_btn = document.getElementById('couupon-apply-btn');

    if (inputText === 'NEW15') {

        // console.log(grand_price);
        coupon_apply_btn.disabled = false;
        const discount = (15 / 100) * total_price;
        const grand_price = total_price - discount;

        coupon_apply_btn.addEventListener('click', function () {
            const grand_total = 'grand-total';
            setElementTextValue(grand_total, grand_price);
        })
    }
    else if (inputText == 'COUPLE20') {
        coupon_apply_btn.disabled = false;
        const discount = (20 / 100) * total_price;
        const grand_price = total_price - discount;
        coupon_apply_btn.addEventListener('click', function () {
            const grand_total = 'grand-total';
            setElementTextValue(grand_total, grand_price);
        })
    }
    else {
        coupon_apply_btn.disabled = true;
    }


    // console.log(inputText)
});





function getPassengerInfo() {
    const passenger_name_element = document.getElementById('passenger-name');

    const passenger_phone_element = document.getElementById('passenger-phone');

    const passenger_email_element = document.getElementById('passenger-email');


    const passenger_name = passenger_name_element.value;
    const passenger_phone = passenger_phone_element.value;
    const passenger_email = passenger_email_element.value;
    // console.log(passenger_name.length);

    const next_submit = document.getElementById('next-submit');

    if (passenger_name.length != 0 && passenger_phone.length != 0 && passenger_email != 0) {
        next_submit.disabled = false;
    }
    else {
        next_submit.disabled = true;

    }

}

