class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}

const validation = (
  name,
  year,
  author,
  summary,
  publisher,
  pageCount,
  readPage,
  reading,
  purpose,
) => {
  if (typeof (name) !== 'string' || name === undefined || name.length === 0) {
    if (purpose === 'update') {
      throw new ValidationError('Gagal memperbarui buku. Mohon isi nama buku');
    }
    if (purpose === 'add') {
      throw new ValidationError('Gagal menambahkan buku. Mohon isi nama buku');
    }
  }
  if (typeof (year) !== 'number' || year === undefined || year.length === 0) {
    throw new ValidationError('Gagal memproses permintaan.Mohon isi kolom Year dengan benar');
  }
  if (typeof (author) !== 'string' || author === undefined || author.length === 0) {
    throw new ValidationError('Gagal memproses permintaan.Mohon isi kolom Author dengan benar');
  }
  if (typeof (summary) !== 'string' || summary === undefined || summary.length === 0) {
    throw new ValidationError('Gagal memproses permintaan.Mohon isi kolom Summary dengan benar');
  }
  if (typeof (publisher) !== 'string' || publisher === undefined || publisher.length === 0) {
    throw new ValidationError('Gagal memproses permintaan.Mohon isi kolom Publisher dengan benar');
  }
  if (typeof (pageCount) !== 'number' || pageCount === undefined || pageCount.length === 0 || pageCount < 0) {
    throw new ValidationError('Gagal memproses permintaan.Mohon isi kolom Jumlah Halaman dengan benar');
  }
  if (typeof (readPage) !== 'number' || readPage === undefined || readPage.length === 0 || readPage < 0) {
    throw new ValidationError('Gagal memproses permintaan.Mohon isi kolom Halaman Sekarang dengan benar');
  }
  if (typeof (reading) !== 'boolean' || reading === undefined) {
    throw new ValidationError('Gagal memproses permintaan.Mohon isi kolom reading dengan benar');
  }
  if (pageCount < readPage) {
    if (purpose === 'update') {
      throw new ValidationError('Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount');
    }
    if (purpose === 'add') {
      throw new ValidationError('Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount');
    }
  }
};

export default validation;
