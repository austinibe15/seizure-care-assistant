async function main() {

  const NeuroCare =
    await ethers.getContractFactory(
      "NeuroCare"
    );

  const neurocare =
    await NeuroCare.deploy();

  await neurocare.waitForDeployment();

  console.log(
    "NeuroCare deployed to:",
    await neurocare.getAddress()
  );
}

main().catch((error) => {

  console.error(error);

  process.exitCode = 1;

});