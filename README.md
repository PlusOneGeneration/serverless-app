# serverless-app

App pushes POST payload to google spreadsheet.    

### Stack:
- [Serverless (AWS)](https://serverless.com/)
- [AWS Lambda](https://aws.amazon.com/documentation/lambda/)
- [Google spreadsheets](https://developers.google.com/sheets/)

![how](./how.gif)

[YouTube Video](https://www.youtube.com/watch?v=NnTmtOmoEJQ)


##### How to setup AWS side.
![how AWS](./how-aws.gif)
[YouTube Video](https://youtu.be/s5Ovnn4tuvA)

### How to setup:
- AWS Sign in [https://console.aws.amazon.com/console/home](https://console.aws.amazon.com/console/home)
- Install Node.js [https://nodejs.org/en/](https://nodejs.org/en/) 
- `npm install serverless -g`
- Follow video to get credentials: [AWS credential setup for Serverless](https://www.youtube.com/watch?v=HSd9uYj2LJA)
- It should lead to: `serverless config credentials --provider aws --key <...AKIAIOSFO..> --secret <....EMI/K7MDENG/bPxRfiCYE...>`
	* [https://serverless.com/framework/docs/providers/aws/guide/credentials/](https://serverless.com/framework/docs/providers/aws/guide/credentials/)
- Setup your app in `users/config/default.js`
	* `serviceKey` it's **Service Account** [follow this instructions](https://www.npmjs.com/package/google-spreadsheet#service-account-recommended-method) 
	* `spreadsheet` __key should be__ docs.google.com/spreadsheets/d/**11Sso5yOjzpF_xxxxV1f24IWwjVl5uZMDNXlbtmXIBFc**/edit#gid=0
	  * Make sure that you have `JSON` column in the google spreadsheet. (First line of spread sheet)
	  * If you need separated fields in the google spreadsheets like `firstName`, `lastName`, `email` just add column names
- Install dependencies `cd users && npm install`
- Deployment: `cd users && serverless deploy`
- It will give you endpoint to POST
	* for ex. `https://j66dyaz0de.execute-api.us-east-1.amazonaws.com/dev/users`
- Now you can post and payload will be saved into JSON column.
- To see logs: `serverless logs -f users-create`

### Docker way (OS isolated)
- AWS Sign in [https://console.aws.amazon.com/console/home](https://console.aws.amazon.com/console/home)
- Follow video to get credentials: [AWS credential setup for Serverless](https://www.youtube.com/watch?v=HSd9uYj2LJA)
- It should lead for getting `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY`
	* [https://serverless.com/framework/docs/providers/aws/guide/credentials/](https://serverless.com/framework/docs/providers/aws/guide/credentials/)
	* make sure that you gave `AdministratorAccess` permissions for your user.
- Setup your app in `users/config/default.js`
- `docker-compose run users` - it will give users console for you
- `npm install` - install dependencies
- `AWS_ACCESS_KEY_ID=...IGFSOWXLRPYAM... AWS_SECRET_ACCESS_KEY=...ybvBuURG3CmWrNbIiQ+PbsEFfSFt4tY4e.... serverless deploy -s production`
	* it should deploy your app to
- Copy endpoint and use it.