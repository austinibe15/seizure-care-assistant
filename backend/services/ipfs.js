async function uploadJSON(data) {

  console.log("📦 Fake IPFS upload:", data);

  return "QmFAKECID123456";
}

module.exports = {
  uploadJSON
};