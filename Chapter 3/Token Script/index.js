import { ThirdwebSDK } from '@thirdweb-dev/sdk';
import dotenv from 'dotenv';
dotenv.config();

const sdk = ThirdwebSDK.fromPrivateKey(
  process.env.PRIVATE_KEY, 
  "mumbai", 
);

async function deployToken() {
  try {
    const tokenDropContract = await sdk.deployer.deployToken({
      name: 'Test Token Drop',
      primary_sale_recipient: '<recipient public address>',
    });
    console.log('Token Drop Contract Deployed:', tokenDropContract);
  } catch (error) {
    console.error('failed to deploy contract:', error);
  }
}
deployToken();