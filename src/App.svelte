<script>
	//Importamos la base de datos
	import { db } from "./firebase";
	import {
		collection,
		getDocs,
		doc,
		addDoc,
		updateDoc,
		deleteDoc,
	} from "firebase/firestore";

	let cliente = {
		nombre: "",
		apellidos: "",
		horario: "",
		imagen: "",
		edad: "",
	};
	let monitor = {
		nombre: "",
		apellidos: "",
		horario: "",
		imagen: "",
		edad: "",
	};

	let clientes = [];

	let monitores = [];


	const cargarClientes = async () => {
		const querySnapshot = await getDocs(collection(db, "clientes"));
		let listado = [];
		querySnapshot.forEach((lista) => {
			listado.push({ ...lista.data(), id: lista.id });
		});
		clientes = [...listado];
		console.log(clientes);
	};
	cargarClientes();


</script>

<main>
	{#each clientes as c, i}
		{#if c.imagen}
			<img
				src={c.imagen}
				alt="thumbnail"
			/>
		{:else}
			<p
				No encontrada
			/>
		{/if}

		<p>Nombre: {c.nombre}</p>
		<p>Apellidos: {c.apellidos}</p>
		<p>Horario: {c.horario}</p>
		<p>Edad: {c.edad}</p>
		<br>
	{/each}




	<h1>Form Cliente</h1>
	<form class="content">
		<p>Nombre</p>
		<input type="text" bind:value={clientes.nombre} />
		<p>Apellidos</p>
		<input type="text" bind:value={clientes.apellidos} />
		<p>Horario</p>
		<select bind:value={clientes.horario}>
			<option>Mañana</option>
			<option>Tarde</option>
		</select>
		<p>Imagen</p>
		<input type="text" bind:value={clientes.imagen} />
		<button type=submit>
			Submit
		</button>
	</form>

</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
