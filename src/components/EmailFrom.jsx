import React from 'react';

function EmailButton() {
  const handleEmailClick = () => {
    // Gantilah URL dengan URL endpoint server backend Anda untuk mengirim email.
    const emailEndpoint = '/api/send-email';

    // Gantilah dataEmail dengan data email yang sesuai.
    const dataEmail = {
      to: 'alamat-email-tujuan@example.com',
      subject: 'Subjek Email',
      message: 'Isi pesan email Anda di sini.',
    };

    // Kirim permintaan POST ke server backend untuk mengirim email.
    fetch(emailEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataEmail),
    })
      .then((response) => {
        if (response.ok) {
          alert('Email terkirim dengan sukses.');
        } else {
          alert('Gagal mengirim email.');
        }
      })
      .catch((error) => {
        console.error('Terjadi kesalahan:', error);
        alert('Terjadi kesalahan saat mengirim email.');
      });
  };

  return (
    <button onClick={handleEmailClick}>
      Kirim Email
    </button>
  );
}

export default EmailButton;
