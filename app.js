const OPTIONS = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '683bd41486msh77ca764e1ff8138p1624adjsn866880b3d9ce',
      'X-RapidAPI-Host': 'ip-geolocation-ipwhois-io.p.rapidapi.com'
    }
  };

const fetchIpInfo = ip => {
    return fetch("https://ip-geolocation-ipwhois-io.p.rapidapi.com/json/ ${ip}", OPTIONS)
    .then(res => res.json())
    .catch(err => console.log("aca hay un error fijate el codigo"))
}

const $form = document.querySelector("#form")
const $input = document.querySelector("#input")
const $submit = document.querySelector("#submit")
const$results = document.querySelector("#results")

$form.addEventListener("submit", (event) => {event.preventDefault()
    const {value} = $input
    if (!value) return

    $submit.setAttribute("disabled" , " " )
    $submit.setAttribute("aria-busy" , "true")
    const ipInfo = await fetchIpInfo(value)
    if (ipInfo) {
        $results.innerHTML = JSON.stringify(ipInfo, null , 2)
    }


    $submit.removeAttribute("disabled")
    $submit.removeAttribute("aria-busy" , "true")
})
