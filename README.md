API by Example
==============

API by Example (ABE) is a format that can be used to describe APIs in a format
that can be programmatically consumed by tools.

The main idea behind it is to illustrate how an API works via concrete
examples, that can be used to generate tests, stubs and documentation for a
given API.

API by Example was born out of the work its initial authors have been
doing at Rockabox, while developing better ways to test API producers and
consumers.

The format is initially limited to HTTP-based APIs, and optimised for (but not
limited to) APIs that exchange JSON data.

Specification
-------------

The main building block of ABE is a JSON file that illustrates one API call.
One API call is an HTTP request that consists of a URL (pattern), sample
request data and sample response data. Additional fields are included for
documentation purposes.

The skeleton of an ABE file is:

```json
{
    "description": "<description>",
    "url": "<url>",
    "method": "<http method>",
    "examples": {
        "<label>": {
            "description": "<description>",
            "request": {
                "queryParams": <params>,
                "headers": <headers>,
                "body": <body>
            },
            "response": {
                "status": <status>,
                "headers": <headers>,
                "body": <body>
            }
        }
    }
}
```
(TODO: convert the above to JSON schema?).

* `description` is an optional text describing the API or the concrete example
* `label` is an arbitrary label that you can use to refer to one concrete
  example, useful when you want to include more than one possible responses.
  For instance, `"OK"` and `"Not found"`, or `"Empty"` versus `"One"` 
  versus `"Many"`.
* `http method` is one of the HTTP verbs `GET`, `POST`, `PUT`...
* `params` are query string parameters to add to the URL
* `headers` is an optional object mapping headers to values
* `status` is HTTP status: `200`, `404`, etc...
* `body` is the payload, in JSON format, or a properly escaped string.
  Binary encodings are not supported at the moment.


To illustrate with a concrete example:

```json
{
    "description": "Retrieve a list of brands",
    "url": "/campaigns/brands/",
    "method": "GET",
    "examples": {
        "OK": {
            "description": "Collection found",
            "request": {
                "url": "/campaigns/brands/",
                "queryParams": {},
                "body": {}
            },
            "response": {
                "status": 200,
                "body": [
                    {
                        "id": 1,
                        "name": "Microsoft"
                    },
                    {
                        "id": 2,
                        "name": "Monsoon"
                    },
                    {
                        "id": 3,
                        "name": "Mars"
                    },
                    {
                        "id": 4,
                        "name": "John Lewis"
                    }
                ]
            }
        }
    }
}
```


