help:
	@echo
	@echo Help
	@echo

	@echo configure                     - configures application
	@echo deploy                        - deploys app
	@echo logs                          - show logs
	@echo metrics                       - show metrics

	@echo

configure:
	cd users && npm install

serverless.cli:
	which serverless || npm install --global serverless

deploy: serverless.cli
	cd users && serverless deploy

logs: serverless.cli
	cd users && serverless logs -f users-create

metrics: serverless.cli
	cd users && serverless metrics

