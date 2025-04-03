'use server'

export async function getExposedProjects() {
    return [
      // {
      //   image: 'https://oihictxzwf0pwyra.public.blob.vercel-storage.com/bap-images/Gal_Flores/COND%20CAMPO%20DI%20FIORE%20RUA%20GAL%20FLORES_2.jpg',
      //   title: 'General Flores',
      //   address: 'Rua General Flores 445',
      //   mapLink: 'https://maps.app.goo.gl/RenKRquy9r7CLWkS9'
      // },
      {
        image: 'https://oihictxzwf0pwyra.public.blob.vercel-storage.com/bap-images/coop_Dom_Pedro_unidade_2/COOP%20DOM%20PEDRO%20I_UNIDADE%202_FOTO%202.jpg',
        title: 'Coop Dom Pedro Unidade 2',
        address: 'Avenida Dom Pedro II, 1250',
        mapLink: 'https://maps.app.goo.gl/exampleDomPedro'
      },
      {
        image: 'https://oihictxzwf0pwyra.public.blob.vercel-storage.com/bap-images/coop_drogaria_carijos/DROGARIA_COOP_CARIJOS_4.jpg',
        title: 'Drogaria Coop Carijós',
        address: 'Rua Carijós, 78',
        mapLink: 'https://maps.app.goo.gl/exampleCarijos'
      },
      {
        image: 'https://oihictxzwf0pwyra.public.blob.vercel-storage.com/bap-images/salao_comercial_r_teixeira_de_freitas/UNIDADE%203%20CASA%20DA%20ESPERAN%C3%87A%20JOAQUIM%20TAVORA_9.jpg',
        title: 'Salão Comercial Teixeira de Freitas',
        address: 'Rua Teixeira de Freitas, 55',
        mapLink: 'https://maps.app.goo.gl/exampleTeixeira'
      },
      {
        image: 'https://oihictxzwf0pwyra.public.blob.vercel-storage.com/bap-images/galpao_av_dr_erasmo/GALPAO_AV_DR_ERASMO_6.jpg',
        title: 'Galpão Av. Dr. Erasmo',
        address: 'Avenida Dr. Erasmo, 100',
        mapLink: 'https://maps.app.goo.gl/exampleErasmo'
      }
    ];
  }
  