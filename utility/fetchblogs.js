// async function fetchblogs() {
//   try {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/blogs`, {
//       cache: "no-cache",
//     });
//     if (!res.ok) {
//       throw new error("Failed to fetch data");
//     }
//   } catch (error) {
//     console.log("error");
//   }
// }

async function fetchblogs() {
  try {
    // const res = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/blogs`, {
    //   method: "GET",
    // });
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/blogs`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export default fetchblogs;
