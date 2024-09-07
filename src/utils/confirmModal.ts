import Swal from "sweetalert2";

export const confirmModal = (title: string, callback: () => void) => {
  Swal.fire({
    title,
    text: "Would you like to start again?",
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "gray",
    confirmButtonText: "Yes",
  }).then((result) => {
    if (result.isConfirmed) {
      callback();
      Swal.fire({
        title: "Game started",
        text: "Fight!!!",
        icon: "success",
      });
    }
  });
};
