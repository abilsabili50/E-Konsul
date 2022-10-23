let detail = document.getElementById("detail")

let link = window.location.search;
let params = new URLSearchParams(link)
let id = params.get("id")
let psikolog;
console.log(id);

if(!id) {
    window.location.href = 'list-psikolog.html';
}

const URL = `https://634d3cccacb391d34a979eb9.mockapi.io/api/konsul/psikolog/${id}`;

const getDataPsikolog = async () => {
	const response = await fetch(URL);
	psikolog = await response.json();

    psikolog.forEach(e => {
        detail.innerHTML += `<div class="col-md-5 mb-5">
        <div class="row">
            <img src="https://www.w3schools.com/w3css/img_avatar3.png" alt="Hero logo"
                class="img-fluid img-manual" />
        </div>
        <div class="row text-center mt-4 mb-3">
            <div class="col-lg-6 border-lg-end">
                <p class="h3">Pengalaman</p>
                <p class="fs-5">5 Tahun</p>
            </div>
            <div class="col-lg-6">
                <p class="h3">Harga</p>
                <p class="fs-5">Rp. 200.000</p>
            </div>
        </div>
        <div class="row">
            <div class="d-grid gap-2 col-md-6 mx-auto">
                <button type="submit" class="btn btn-primary">
                    Konsultasi dengan ${e.name}
                </button>
            </div>
        </div>
    </div>
    <div class="col-md-7" id="detail">
        <div class="row border-bottom pb-3">
            <h1>${e.name}</h1>
            <h4>${e.specialist}</h4>
        </div>
        <div class="row border-bottom py-3">
            <h6>Melayani Via : zoom</h6>
        </div>
        <div class="row py-3">
            <h6>Jadwal Praktik : Senin & Jum'at</h6>
            <h6 class="mt-3 mb-4">Profil</h6>
            <p>
                ${e.Description}
            </p>
        </div>
        </div>`
}
getDataPsikolog()