// window.addEventListener('load', () => {
//   function Lazy1() {
//     const sections = document.querySelectorAll('.lazy-element');

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           entry.target.classList.toggle(
//             'slide-bottom-top',
//             entry.isIntersecting
//           );
//           if (entry.isIntersecting) {
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     sections.forEach((section) => {
//       observer.observe(section);
//     });
//   }

//   Lazy1();
// });
function toggleModal(key: string) {
  const modalBackdrop = document.getElementById(`modal-backdrop-${key}`);
  const modalDialog = document.getElementById(`modal-dialog-${key}`);
  if (modalBackdrop!.classList.contains('hidden')) {
    modalBackdrop!.classList.remove('hidden');
    setTimeout(() => {
      modalDialog!.classList.remove('opacity-0', 'scale-125');
      modalDialog!.classList.add('opacity-100', 'scale-100');
    }, 10); // Small delay to trigger the transition
  } else {
    modalDialog!.classList.remove('opacity-100', 'scale-100');
    modalDialog!.classList.add('opacity-0', 'scale-125');
    setTimeout(() => {
      modalBackdrop!.classList.add('hidden');
    }, 200); // Duration of the transition
  }
}
