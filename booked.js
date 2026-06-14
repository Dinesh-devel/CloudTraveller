 let login = document.getElementById("logout").addEventListener("click",function(e){
    e.preventDefault();
    alert("Are you sure to log out");
    window.location = "aero.html"
 })


 const btn = document.getElementById("btn");

       

        
        const flights = [
            {
                name: "indigo",
                time: "10.00 PM",
                prize: "$500"
            },
            {
                name: "Tamilnadu Airlines",
                time: "11.00 AM",
                prize: "$650"
            },
            {
                name: "Air india",
                time: "12.00 PM",
                prize: "$500"
            },
            {
                name: "Kingfisher",
                time: "11.00 PM",
                prize: "$400"
            }
        ];
        btn.addEventListener("click", function (e) {
            e.preventDefault();

            const from = document.getElementById("From").value;
            const To = document.getElementById("TO").value;
            const date = document.getElementById("Date").value;
            const flightClass = document.getElementById("Select").value;

            const resultBox = document.getElementById("results-section");

            const list = document.getElementById("flights-list");

            if (from === To) {
                alert("orgin and destination cannot be same");
                return;
            }



            resultBox.style.display = "block";
            list.innerHTML = "";

            flights.forEach(function (flight) {
                


                const card = document.createElement("div");

                card.innerHTML = `
            <h3>${flight.name}</h3>
            <p>${from} to ${To} </p>
            <p>${flight.time}</p>   
            <p>${date}</p>
            <p>${flightClass}</p>
            <p>${flight.prize}</p>   
            
             <button onclick="printTicket(
                    '${flight.name}',
                    '${from}',
                    '${To}',
                    '${date}',
                    '${flightClass}',
                    '${flight.prize}'
             )">

                print ticket
            </button>
            `;
                card.style.border = "1px solid black";
                card.style.padding = "10px";
                card.style.marginTop = "10px";
                card.style.backgroundColor = "#ffff"
                card.style.borderRadius = "20px"

                list.appendChild(card);
            });
        });

        function printTicket(name, from, To, date, flightClass, prize) {
            const ticket = window.open("", "", "width=500,height=500");

            ticket.document.write(`
            <h1>Cloud Traveller Ticket</h1>

            <p><b>Flight:</b> ${name}</p>
            <p><b>From:</b> ${from}</p>
            <p><b>To:</b> ${To}</p>
            <p><b>Date:</b> ${date}</p>
            <p><b>Class:</b> ${flightClass}</p>
            <p><b>Price:</b> ${prize}</p>

            <button onclick="window.print()">
                Print
            </button>
        `);

        }