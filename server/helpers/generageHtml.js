const generateHtml = (req) => {
  const { name, email, message } = req.body;
  return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New contact from portfolio</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
        integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
</head>

<body>
    <div class="container-fluid d-flex flex-column align-items-center">
        <h2 class="text-center mt-5">New message from portfolio</h2>

        <table class="table table-bordered col-lg-4 scol-md-6 col-12 mt-5">
            <tbody>
                <tr>
                    <th scope="row">Name</th>
                    <td>${name}</td>
                </tr>
                <tr>
                    <th scope="row">Email</th>
                    <td>${email}</td>
                </tr>
                <tr>
                    <th scope="row">Message</th>
                    <td>${message}</td>
                </tr>
            </tbody>
        </table>

    </div>

</body>

</html>`;
};

module.exports = generateHtml;