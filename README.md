# hsapp

## Config

Add your own api key and secret, username, password, memberid and organizationid

## Develop

```sh
docker-compose up
````

Get the ngrok url

```sh
curl -Ls $(docker port hsapp_ngrok_1 4040)/api/tunnels/command_line | python -c 'import sys, json; print json.load(sys.stdin)["public_url"]'
````

Test

```sh
curl -X POST \
  https://ngrok_url/api/messages \
  -H 'content-type: application/json' \
  -d '{
	"data": "this is data"
}'
````
