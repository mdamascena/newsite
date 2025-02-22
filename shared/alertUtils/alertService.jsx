// import Swal from 'sweetalert2'

// async function AlertSimpleNotification(titulo, icone) {
//     Swal.fire({
//         toast: true,
//         icon: icone,
//         position: 'top-end',
//         showConfirmButton: false,
//         timer: 2000,
//         timerProgressBar: true,
//         confirmButtonColor: '#046434',
//         title: titulo

//     });
// }

// async function AlertSimple(titulo, mensagem, icone) {
//     const alert = await Swal.fire({
//         icon: icone,
//         title: titulo,
//         html: mensagem,
//         confirmButtonColor: '#046434',
//     });
// }

// function AlertSimpleRes(titulo, res) {
//     if (res.status == 200) {
//         const alert = Swal.fire({
//             icon: "success",
//             title: titulo,
//             confirmButtonColor: '#046434',
//             html: res.data
//         });
//     }
//     else if (res.status == 201) {
//         const alert = Swal.fire({
//             icon: "success",
//             title: titulo,
//             confirmButtonColor: '#046434',
//             html: "Criado com sucesso!"
//         });
//     }
//     else {
//         const alert = Swal.fire({
//             icon: "warning",
//             title: titulo,
//             confirmButtonColor: '#046434',
//             html: res.data
//         });
//     }
// }

// function AlertSimpleErr(titulo, err) {
//     if (!err.response) {
//         const alert = Swal.fire({
//             icon: "error",
//             title: titulo,
//             html: "Não foi possível acessar a API",
//             confirmButtonColor: '#046434'
//         });
//     }
//     else {
//         if (err.response.status == 400) {
//             if (err.response.data.errors) {
//                 const errors = [];
//                 for (var i = 0; i < Object.values(err.response.data.errors).length; i++) {
//                     var response = {
//                         key: Object.keys(err.response.data.errors)[i],
//                         value: Object.values(err.response.data.errors)[i]
//                     }
//                     errors.push(response);
//                 }
//                 var mensagem = "<div>";
//                 errors.forEach(error => {
//                     mensagem += `${error.key}: ${error.value} <br/>`;
//                 });
//                 const alert = Swal.fire({
//                     icon: "warning",
//                     title: titulo,
//                     html: mensagem + "<div/>",
//                     confirmButtonColor: '#046434'
//                 });
//             }
//             else {
//                 const alert = Swal.fire({
//                     icon: "warning",
//                     title: titulo,
//                     html: err.response.data.title ? err.response.data.title : err.response.data,
//                     confirmButtonColor: '#046434'
//                 });
//             }
//         }
//         else if (err.response.status == 403) {
//             const alert = Swal.fire({
//                 icon: "warning",
//                 title: titulo,
//                 html: err.response.data,
//                 confirmButtonColor: '#046434'
//             });
//         }
//         else {
//             const alert = Swal.fire({
//                 icon: "error",
//                 title: titulo,
//                 html: err.response.data,
//                 confirmButtonColor: '#046434'
//             });
//         }
//     }
// }

// async function AlertQuestion(titulo, pergunta, promise) {
//     var retorno;
//     const alert = await Swal.fire({
//         title: titulo,
//         html: pergunta,
//         icon: 'question',
//         showDenyButton: true,
//         confirmButtonText: 'Sim',
//         denyButtonText: 'Não',
//         allowOutsideClick: false,
//         confirmButtonColor: '#046434',
//         preConfirm: () => {
//             promise();
//         }
//     }).then((result) => {
//         retorno = result;
//     });
//     return retorno;
// }

// function AlertQuestion2(titulo, pergunta) {
//     return Swal.fire({
//         title: titulo,
//         html: pergunta,
//         icon: 'question',
//         showDenyButton: true,
//         confirmButtonText: 'Sim',
//         denyButtonText: 'Não',
//         allowOutsideClick: false,
//         confirmButtonColor: '#046434'
//     });
// }

// async function AlertInputQuestion(titulo, pergunta, label, promise, confirmButtonText = '', tamanhoJustificativa) {
//     const alert = await Swal.fire({
//         title: titulo,
//         html: pergunta,
//         icon: 'question',
//         inputLabel: label,
//         input: "textarea",
//         showDenyButton: true,
//         confirmButtonText: !confirmButtonText ? 'Alterar' : confirmButtonText,
//         confirmButtonColor: '#046434',
//         denyButtonText: 'Voltar',
//         allowOutsideClick: false,
//         inputValidator: (value) => {
//             return new Promise((resolve) => {
//                 if (!value || value.length < 15) {
//                     resolve('A justificativa deve ter no minímo 15 caracteres');
//                 } else if (!!tamanhoJustificativa && value.length > tamanhoJustificativa) {
//                     resolve(`A justificativa deve ter no máximo ${tamanhoJustificativa} caracteres`);
//                 }
//                 resolve('')
//             });
//         },
//         preConfirm: (value) => {
//             if (!value) {
//                 AlertSimple("Aviso!", "Não pode estar em branco", "warning");
//                 return;
//             }
//         }
//     }).then((result) => {
//         return promise(result);
//     });
// }

// async function AlertExcludeQuestion(promise, silence) {
//     const result = await Swal.fire({
//         title: 'Atenção!',
//         html: 'Tem certeza que deseja excluir o registro atual?',
//         icon: 'question',
//         showDenyButton: true,
//         confirmButtonText: 'Sim',
//         denyButtonText: 'Não',
//         allowOutsideClick: false,
//         confirmButtonColor: '#046434',
//         preConfirm: async () => {
//             try {
//                 await promise();
//             }
//             catch (error) {
//                 Swal.showValidationMessage('Falha na operação')
//             }
//         }
//     });
//     if (result.isConfirmed && !silence) {
//         AlertSimple("Aviso", "Operação sucesso", "success");
//     }
// }

// export {
//     AlertSimpleNotification, AlertSimple, AlertSimpleRes, AlertSimpleErr, AlertQuestion, AlertQuestion2, AlertExcludeQuestion, AlertInputQuestion
// }