<script lang="ts">
  import { SI_Leader } from "../si.js";

  export let names: Array<String> = [];
  export let data: Map<String, SI_Leader> = new Map();
  let currentSI: String | null = null;

  function changeSI(event: any) {
    const si = event.target.innerText;
    if (si === currentSI) return;

    currentSI = si;

    const ids = ["name", "days", "time", "location", "zoom", "discord"];

    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) {
        if (id === "zoom" || id === "discord") {
          if (data.get(si)[id] === "null") {
            el.setAttribute("href", "javascript:void(0)");
            el.setAttribute("class", "text-gray-500");
            continue;
          } else {
            el.setAttribute("href", data.get(si)[id]);
            el.setAttribute("class", "text-blue-500");
            continue;
          }
        } else el.innerText = data.get(si)[id];
      }
    }
  }
</script>

<!-- TODO: Close dropdown on name click -->

<button
  id="dropdownDefaultButton"
  data-dropdown-toggle="dropdown"
  class="text-white bg-action mb-6 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  type="button"
  >SI Leaders <svg
    class="w-2.5 h-2.5 ms-3"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 10 6"
  >
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="m1 1 4 4 4-4"
    ></path>
  </svg>
</button>

<div
  id="dropdown"
  class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
>
  <ul
    class="py-2 text-sm text-gray-700 dark:text-gray-200"
    aria-labelledby="dropdownDefaultButton"
  >
    {#each names as name}
      <li class="grid place-items-center">
        <button
          on:click={changeSI}
          class="px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          {name}
        </button>
      </li>
    {/each}
  </ul>
</div>

<div>
  <h1 class="text-2xl font-bold mb-4">Information</h1>

  <ul class="list-disc pl-6 mb-6">
    <li><strong>SI Leader:</strong> <span id="name">TBD</span></li>
    <li><strong>Days:</strong> <span id="days">TBD</span></li>
    <li><strong>Time:</strong> <span id="time">TBD</span></li>
    <li><strong>Location:</strong> <span id="location">TBD</span></li>
    <li>
      <!-- svelte-ignore a11y-invalid-attribute -->
      <a id="zoom" class="text-blue-500">Zoom Meeting</a>
    </li>
    <li>
      <!-- svelte-ignore a11y-invalid-attribute -->
      <a id="discord" href="#" target="_blank" class="text-blue-500"
        >Class Discord</a
      >
    </li>
  </ul>

  <h1 class="text-2xl font-bold mb-4">Useful Links</h1>

  <ul class="list-disc pl-6">
    <li><a href="/qr" class="text-blue-500">Attendance QR Code</a></li>
    <li>
      <a href="/map" target="_blank" class="text-blue-500">Campus Map</a>
    </li>
  </ul>
</div>
