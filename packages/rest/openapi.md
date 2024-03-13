<!-- Generator: Widdershins v4.0.1 -->

<h1 id="">HTTP API Console v</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<h1 id="-query">Query</h1>

## SeiprotocolSeichainDexGetTwap

<a id="opIdSeiprotocolSeichainDexGetTwap"></a>

`GET /sei-protocol/seichain/dex/get_twap/{priceDenom}/{assetDenom}`

*Queries a list of GetTwap items.*

<h3 id="seiprotocolseichaindexgettwap-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|priceDenom|path|string|true|none|
|assetDenom|path|string|true|none|

> Example responses

> 200 Response

<h3 id="seiprotocolseichaindexgettwap-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|Inline|
|default|Default|An unexpected error response.|Inline|

<h3 id="seiprotocolseichaindexgettwap-responseschema">Response Schema</h3>

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int32)|false|none|none|
|» message|string|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|any|false|none|none|
|»» @type|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## SeiprotocolSeichainDexLongBookAll

<a id="opIdSeiprotocolSeichainDexLongBookAll"></a>

`GET /sei-protocol/seichain/dex/long_book`

*Queries a list of LongBook items.*

<h3 id="seiprotocolseichaindexlongbookall-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pagination.key|query|string(byte)|false|key is a value returned in PageResponse.next_key to begin|
|pagination.offset|query|string(uint64)|false|offset is a numeric offset that can be used when key is unavailable.|
|pagination.limit|query|string(uint64)|false|limit is the total number of results to be returned in the result page.|
|pagination.countTotal|query|boolean|false|count_total is set to true  to indicate that the result set should include|
|pagination.reverse|query|boolean|false|reverse is set to true if results are to be returned in the descending order.|

#### Detailed descriptions

**pagination.key**: key is a value returned in PageResponse.next_key to begin
querying the next page most efficiently. Only one of offset or key
should be set.

**pagination.offset**: offset is a numeric offset that can be used when key is unavailable.
It is less efficient than using key. Only one of offset or key should
be set.

**pagination.limit**: limit is the total number of results to be returned in the result page.
If left empty it will default to a value to be set by each app.

**pagination.countTotal**: count_total is set to true  to indicate that the result set should include
a count of the total number of items available for pagination in UIs.
count_total is only respected when offset is used. It is ignored when key
is set.

**pagination.reverse**: reverse is set to true if results are to be returned in the descending order.

Since: cosmos-sdk 0.43

> Example responses

> 200 Response

<h3 id="seiprotocolseichaindexlongbookall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|Inline|
|default|Default|An unexpected error response.|Inline|

<h3 id="seiprotocolseichaindexlongbookall-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» LongBook|[object]|false|none|none|
|»» id|string(uint64)|false|none|none|
|»» entry|object|false|none|none|
|»»» price|string(uint64)|false|none|none|
|»»» quantity|string(uint64)|false|none|none|
|»»» allocationCreator|[string]|false|none|none|
|»»» allocation|[string]|false|none|none|
|»»» priceDenom|string|false|none|none|
|»»» assetDenom|string|false|none|none|
|» pagination|object|false|none|PageResponse is to be embedded in gRPC response messages where the<br>corresponding request message has used PageRequest.<br><br> message SomeResponse {<br>         repeated Bar results = 1;<br>         PageResponse page = 2;<br> }|
|»» nextKey|string(byte)|false|none|none|
|»» total|string(uint64)|false|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int32)|false|none|none|
|» message|string|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|any|false|none|none|
|»» @type|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## SeiprotocolSeichainDexLongBook

<a id="opIdSeiprotocolSeichainDexLongBook"></a>

`GET /sei-protocol/seichain/dex/long_book/{id}`

*Queries a LongBook by id.*

<h3 id="seiprotocolseichaindexlongbook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uint64)|true|none|

> Example responses

> 200 Response

<h3 id="seiprotocolseichaindexlongbook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|Inline|
|default|Default|An unexpected error response.|Inline|

<h3 id="seiprotocolseichaindexlongbook-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» LongBook|object|false|none|none|
|»» id|string(uint64)|false|none|none|
|»» entry|object|false|none|none|
|»»» price|string(uint64)|false|none|none|
|»»» quantity|string(uint64)|false|none|none|
|»»» allocationCreator|[string]|false|none|none|
|»»» allocation|[string]|false|none|none|
|»»» priceDenom|string|false|none|none|
|»»» assetDenom|string|false|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int32)|false|none|none|
|» message|string|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|any|false|none|none|
|»» @type|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## SeiprotocolSeichainDexParams

<a id="opIdSeiprotocolSeichainDexParams"></a>

`GET /sei-protocol/seichain/dex/params`

*Parameters queries the parameters of the module.*

> Example responses

> 200 Response

<h3 id="seiprotocolseichaindexparams-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|Inline|
|default|Default|An unexpected error response.|Inline|

<h3 id="seiprotocolseichaindexparams-responseschema">Response Schema</h3>

Status Code **200**

*QueryParamsResponse is response type for the Query/Params RPC method.*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» params|object|false|none|params holds all the parameters of this module.|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int32)|false|none|none|
|» message|string|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|any|false|none|none|
|»» @type|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## SeiprotocolSeichainDexShortBookAll

<a id="opIdSeiprotocolSeichainDexShortBookAll"></a>

`GET /sei-protocol/seichain/dex/short_book`

*Queries a list of ShortBook items.*

<h3 id="seiprotocolseichaindexshortbookall-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pagination.key|query|string(byte)|false|key is a value returned in PageResponse.next_key to begin|
|pagination.offset|query|string(uint64)|false|offset is a numeric offset that can be used when key is unavailable.|
|pagination.limit|query|string(uint64)|false|limit is the total number of results to be returned in the result page.|
|pagination.countTotal|query|boolean|false|count_total is set to true  to indicate that the result set should include|
|pagination.reverse|query|boolean|false|reverse is set to true if results are to be returned in the descending order.|

#### Detailed descriptions

**pagination.key**: key is a value returned in PageResponse.next_key to begin
querying the next page most efficiently. Only one of offset or key
should be set.

**pagination.offset**: offset is a numeric offset that can be used when key is unavailable.
It is less efficient than using key. Only one of offset or key should
be set.

**pagination.limit**: limit is the total number of results to be returned in the result page.
If left empty it will default to a value to be set by each app.

**pagination.countTotal**: count_total is set to true  to indicate that the result set should include
a count of the total number of items available for pagination in UIs.
count_total is only respected when offset is used. It is ignored when key
is set.

**pagination.reverse**: reverse is set to true if results are to be returned in the descending order.

Since: cosmos-sdk 0.43

> Example responses

> 200 Response

<h3 id="seiprotocolseichaindexshortbookall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|Inline|
|default|Default|An unexpected error response.|Inline|

<h3 id="seiprotocolseichaindexshortbookall-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» ShortBook|[object]|false|none|none|
|»» id|string(uint64)|false|none|none|
|»» entry|object|false|none|none|
|»»» price|string(uint64)|false|none|none|
|»»» quantity|string(uint64)|false|none|none|
|»»» allocationCreator|[string]|false|none|none|
|»»» allocation|[string]|false|none|none|
|»»» priceDenom|string|false|none|none|
|»»» assetDenom|string|false|none|none|
|» pagination|object|false|none|PageResponse is to be embedded in gRPC response messages where the<br>corresponding request message has used PageRequest.<br><br> message SomeResponse {<br>         repeated Bar results = 1;<br>         PageResponse page = 2;<br> }|
|»» nextKey|string(byte)|false|none|none|
|»» total|string(uint64)|false|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int32)|false|none|none|
|» message|string|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|any|false|none|none|
|»» @type|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## SeiprotocolSeichainDexShortBook

<a id="opIdSeiprotocolSeichainDexShortBook"></a>

`GET /sei-protocol/seichain/dex/short_book/{id}`

*Queries a ShortBook by id.*

<h3 id="seiprotocolseichaindexshortbook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uint64)|true|none|

> Example responses

> 200 Response

<h3 id="seiprotocolseichaindexshortbook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|Inline|
|default|Default|An unexpected error response.|Inline|

<h3 id="seiprotocolseichaindexshortbook-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» ShortBook|object|false|none|none|
|»» id|string(uint64)|false|none|none|
|»» entry|object|false|none|none|
|»»» price|string(uint64)|false|none|none|
|»»» quantity|string(uint64)|false|none|none|
|»»» allocationCreator|[string]|false|none|none|
|»»» allocation|[string]|false|none|none|
|»»» priceDenom|string|false|none|none|
|»»» assetDenom|string|false|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int32)|false|none|none|
|» message|string|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|any|false|none|none|
|»» @type|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## CosmosAuthzV1Beta1Grants

<a id="opIdCosmosAuthzV1Beta1Grants"></a>

`GET /cosmos/authz/v1beta1/grants`

*Returns list of `Authorization`, granted to the grantee by the granter.*

<h3 id="cosmosauthzv1beta1grants-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|granter|query|string|false|none|
|grantee|query|string|false|none|
|msgTypeUrl|query|string|false|Optional, msg_type_url, when set, will query only grants matching given msg type.|
|pagination.key|query|string(byte)|false|key is a value returned in PageResponse.next_key to begin|
|pagination.offset|query|string(uint64)|false|offset is a numeric offset that can be used when key is unavailable.|
|pagination.limit|query|string(uint64)|false|limit is the total number of results to be returned in the result page.|
|pagination.countTotal|query|boolean|false|count_total is set to true  to indicate that the result set should include|
|pagination.reverse|query|boolean|false|reverse is set to true if results are to be returned in the descending order.|

#### Detailed descriptions

**pagination.key**: key is a value returned in PageResponse.next_key to begin
querying the next page most efficiently. Only one of offset or key
should be set.

**pagination.offset**: offset is a numeric offset that can be used when key is unavailable.
It is less efficient than using key. Only one of offset or key should
be set.

**pagination.limit**: limit is the total number of results to be returned in the result page.
If left empty it will default to a value to be set by each app.

**pagination.countTotal**: count_total is set to true  to indicate that the result set should include
a count of the total number of items available for pagination in UIs.
count_total is only respected when offset is used. It is ignored when key
is set.

**pagination.reverse**: reverse is set to true if results are to be returned in the descending order.

Since: cosmos-sdk 0.43

> Example responses

> 200 Response

<h3 id="cosmosauthzv1beta1grants-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|Inline|
|default|Default|An unexpected error response.|Inline|

<h3 id="cosmosauthzv1beta1grants-responseschema">Response Schema</h3>

Status Code **200**

*QueryGrantsResponse is the response type for the Query/Authorizations RPC method.*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» grants|[object]|false|none|authorizations is a list of grants granted for grantee by granter.|
|»» authorization|object|false|none|`Any` contains an arbitrary serialized protocol buffer message along with a<br>URL that describes the type of the serialized message.<br><br>Protobuf library provides support to pack/unpack Any values in the form<br>of utility functions or additional generated methods of the Any type.<br><br>Example 1: Pack and unpack a message in C++.<br><br>    Foo foo = ...;<br>    Any any;<br>    any.PackFrom(foo);<br>    ...<br>    if (any.UnpackTo(&foo)) {<br>      ...<br>    }<br><br>Example 2: Pack and unpack a message in Java.<br><br>    Foo foo = ...;<br>    Any any = Any.pack(foo);<br>    ...<br>    if (any.is(Foo.class)) {<br>      foo = any.unpack(Foo.class);<br>    }<br><br> Example 3: Pack and unpack a message in Python.<br><br>    foo = Foo(...)<br>    any = Any()<br>    any.Pack(foo)<br>    ...<br>    if any.Is(Foo.DESCRIPTOR):<br>      any.Unpack(foo)<br>      ...<br><br> Example 4: Pack and unpack a message in Go<br><br>     foo := &pb.Foo{...}<br>     any, err := anypb.New(foo)<br>     if err != nil {<br>       ...<br>     }<br>     ...<br>     foo := &pb.Foo{}<br>     if err := any.UnmarshalTo(foo); err != nil {<br>       ...<br>     }<br><br>The pack methods provided by protobuf library will by default use<br>'type.googleapis.com/full.type.name' as the type URL and the unpack<br>methods only use the fully qualified type name after the last '/'<br>in the type URL, for example "foo.bar.com/x/y.z" will yield type<br>name "y.z".<br><br><br>JSON<br>====<br>The JSON representation of an `Any` value uses the regular<br>representation of the deserialized, embedded message, with an<br>additional field `@type` which contains the type URL. Example:<br><br>    package google.profile;<br>    message Person {<br>      string first_name = 1;<br>      string last_name = 2;<br>    }<br><br>    {<br>      "@type": "type.googleapis.com/google.profile.Person",<br>      "firstName": <string>,<br>      "lastName": <string><br>    }<br><br>If the embedded message type is well-known and has a custom JSON<br>representation, that representation will be embedded adding a field<br>`value` which holds the custom JSON in addition to the `@type`<br>field. Example (for message [google.protobuf.Duration][]):<br><br>    {<br>      "@type": "type.googleapis.com/google.protobuf.Duration",<br>      "value": "1.212s"<br>    }|
|»»» **additionalProperties**|any|false|none|none|
|»»» @type|string|false|none|A URL/resource name that uniquely identifies the type of the serialized<br>protocol buffer message. This string must contain at least<br>one "/" character. The last segment of the URL's path must represent<br>the fully qualified name of the type (as in<br>`path/google.protobuf.Duration`). The name should be in a canonical form<br>(e.g., leading "." is not accepted).<br><br>In practice, teams usually precompile into the binary all types that they<br>expect it to use in the context of Any. However, for URLs which use the<br>scheme `http`, `https`, or no scheme, one can optionally set up a type<br>server that maps type URLs to message definitions as follows:<br><br>* If no scheme is provided, `https` is assumed.<br>* An HTTP GET on the URL must yield a [google.protobuf.Type][]<br>  value in binary format, or produce an error.<br>* Applications are allowed to cache lookup results based on the<br>  URL, or have them precompiled into a binary to avoid any<br>  lookup. Therefore, binary compatibility needs to be preserved<br>  on changes to types. (Use versioned type names to manage<br>  breaking changes.)<br><br>Note: this functionality is not currently available in the official<br>protobuf release, and it is not used for type URLs beginning with<br>type.googleapis.com.<br><br>Schemes other than `http`, `https` (or the empty scheme) might be<br>used with implementation specific semantics.|
|»» expiration|string(date-time)|false|none|none|
|» pagination|object|false|none|pagination defines an pagination for the response.|
|»» nextKey|string(byte)|false|none|none|
|»» total|string(uint64)|false|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int32)|false|none|none|
|» message|string|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|any|false|none|none|
|»» @type|string|false|none|A URL/resource name that uniquely identifies the type of the serialized<br>protocol buffer message. This string must contain at least<br>one "/" character. The last segment of the URL's path must represent<br>the fully qualified name of the type (as in<br>`path/google.protobuf.Duration`). The name should be in a canonical form<br>(e.g., leading "." is not accepted).<br><br>In practice, teams usually precompile into the binary all types that they<br>expect it to use in the context of Any. However, for URLs which use the<br>scheme `http`, `https`, or no scheme, one can optionally set up a type<br>server that maps type URLs to message definitions as follows:<br><br>* If no scheme is provided, `https` is assumed.<br>* An HTTP GET on the URL must yield a [google.protobuf.Type][]<br>  value in binary format, or produce an error.<br>* Applications are allowed to cache lookup results based on the<br>  URL, or have them precompiled into a binary to avoid any<br>  lookup. Therefore, binary compatibility needs to be preserved<br>  on changes to types. (Use versioned type names to manage<br>  breaking changes.)<br><br>Note: this functionality is not currently available in the official<br>protobuf release, and it is not used for type URLs beginning with<br>type.googleapis.com.<br><br>Schemes other than `http`, `https` (or the empty scheme) might be<br>used with implementation specific semantics.|

<aside class="success">
This operation does not require authentication
</aside>

## CosmosBankV1Beta1AllBalances

<a id="opIdCosmosBankV1Beta1AllBalances"></a>

`GET /cosmos/bank/v1beta1/balances/{address}`

*AllBalances queries the balance of all coins for a single account.*

<h3 id="cosmosbankv1beta1allbalances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|address|path|string|true|address is the address to query balances for.|
|pagination.key|query|string(byte)|false|key is a value returned in PageResponse.next_key to begin|
|pagination.offset|query|string(uint64)|false|offset is a numeric offset that can be used when key is unavailable.|
|pagination.limit|query|string(uint64)|false|limit is the total number of results to be returned in the result page.|
|pagination.countTotal|query|boolean|false|count_total is set to true  to indicate that the result set should include|
|pagination.reverse|query|boolean|false|reverse is set to true if results are to be returned in the descending order.|

#### Detailed descriptions

**pagination.key**: key is a value returned in PageResponse.next_key to begin
querying the next page most efficiently. Only one of offset or key
should be set.

**pagination.offset**: offset is a numeric offset that can be used when key is unavailable.
It is less efficient than using key. Only one of offset or key should
be set.

**pagination.limit**: limit is the total number of results to be returned in the result page.
If left empty it will default to a value to be set by each app.

**pagination.countTotal**: count_total is set to true  to indicate that the result set should include
a count of the total number of items available for pagination in UIs.
count_total is only respected when offset is used. It is ignored when key
is set.

**pagination.reverse**: reverse is set to true if results are to be returned in the descending order.

Since: cosmos-sdk 0.43

> Example responses

> 200 Response

<h3 id="cosmosbankv1beta1allbalances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|Inline|
|default|Default|An unexpected error response.|Inline|

<h3 id="cosmosbankv1beta1allbalances-responseschema">Response Schema</h3>

Status Code **200**

*QueryAllBalancesResponse is the response type for the Query/AllBalances RPC
method.*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» balances|[object]|false|none|balances is the balances of all the coins.|
|»» denom|string|false|none|none|
|»» amount|string|false|none|none|
|» pagination|object|false|none|pagination defines the pagination in the response.|
|»» nextKey|string(byte)|false|none|none|
|»» total|string(uint64)|false|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int32)|false|none|none|
|» message|string|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|any|false|none|none|
|»» @type|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## CosmosBankV1Beta1Balance

<a id="opIdCosmosBankV1Beta1Balance"></a>

`GET /cosmos/bank/v1beta1/balances/{address}/by_denom`

*Balance queries the balance of a single coin for a single account.*

<h3 id="cosmosbankv1beta1balance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|address|path|string|true|address is the address to query balances for.|
|denom|query|string|false|denom is the coin denom to query balances for.|

> Example responses

> 200 Response

<h3 id="cosmosbankv1beta1balance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|Inline|
|default|Default|An unexpected error response.|Inline|

<h3 id="cosmosbankv1beta1balance-responseschema">Response Schema</h3>

Status Code **200**

*QueryBalanceResponse is the response type for the Query/Balance RPC method.*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» balance|object|false|none|Coin defines a token with a denomination and an amount.<br><br>NOTE: The amount field is an Int which implements the custom method<br>signatures required by gogoproto.|
|»» denom|string|false|none|none|
|»» amount|string|false|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int32)|false|none|none|
|» message|string|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|any|false|none|none|
|»» @type|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## CosmosBankV1Beta1DenomsMetadata

<a id="opIdCosmosBankV1Beta1DenomsMetadata"></a>

`GET /cosmos/bank/v1beta1/denoms_metadata`

*DenomsMetadata queries the client metadata for all registered coin denominations.*

<h3 id="cosmosbankv1beta1denomsmetadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pagination.key|query|string(byte)|false|key is a value returned in PageResponse.next_key to begin|
|pagination.offset|query|string(uint64)|false|offset is a numeric offset that can be used when key is unavailable.|
|pagination.limit|query|string(uint64)|false|limit is the total number of results to be returned in the result page.|
|pagination.countTotal|query|boolean|false|count_total is set to true  to indicate that the result set should include|
|pagination.reverse|query|boolean|false|reverse is set to true if results are to be returned in the descending order.|

#### Detailed descriptions

**pagination.key**: key is a value returned in PageResponse.next_key to begin
querying the next page most efficiently. Only one of offset or key
should be set.

**pagination.offset**: offset is a numeric offset that can be used when key is unavailable.
It is less efficient than using key. Only one of offset or key should
be set.

**pagination.limit**: limit is the total number of results to be returned in the result page.
If left empty it will default to a value to be set by each app.

**pagination.countTotal**: count_total is set to true  to indicate that the result set should include
a count of the total number of items available for pagination in UIs.
count_total is only respected when offset is used. It is ignored when key
is set.

**pagination.reverse**: reverse is set to true if results are to be returned in the descending order.

Since: cosmos-sdk 0.43

> Example responses

> 200 Response

<h3 id="cosmosbankv1beta1denomsmetadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|Inline|
|default|Default|An unexpected error response.|Inline|

<h3 id="cosmosbankv1beta1denomsmetadata-responseschema">Response Schema</h3>

Status Code **200**

*QueryDenomsMetadataResponse is the response type for the Query/DenomsMetadata RPC
method.*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» metadatas|[object]|false|none|metadata provides the client information for all the registered tokens.|
|»» description|string|false|none|none|
|»» denomUnits|[object]|false|none|none|
|»»» denom|string|false|none|denom represents the string name of the given denom unit (e.g uatom).|
|»»» exponent|integer(int64)|false|none|exponent represents power of 10 exponent that one must<br>raise the base_denom to in order to equal the given DenomUnit's denom<br>1 denom = 1^exponent base_denom<br>(e.g. with a base_denom of uatom, one can create a DenomUnit of 'atom' with<br>exponent = 6, thus: 1 atom = 10^6 uatom).|
|»»» aliases|[string]|false|none|none|
|»» base|string|false|none|base represents the base denom (should be the DenomUnit with exponent = 0).|
|»» display|string|false|none|display indicates the suggested denom that should be<br>displayed in clients.|
|»» name|string|false|none|Since: cosmos-sdk 0.43|
|»» symbol|string|false|none|symbol is the token symbol usually shown on exchanges (eg: ATOM). This can<br>be the same as the display.<br><br>Since: cosmos-sdk 0.43|
|» pagination|object|false|none|pagination defines the pagination in the response.|
|»» nextKey|string(byte)|false|none|none|
|»» total|string(uint64)|false|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int32)|false|none|none|
|» message|string|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|any|false|none|none|
|»» @type|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## CosmosBankV1Beta1DenomMetadata

<a id="opIdCosmosBankV1Beta1DenomMetadata"></a>

`GET /cosmos/bank/v1beta1/denoms_metadata/{denom}`

*DenomsMetadata queries the client metadata of a given coin denomination.*

<h3 id="cosmosbankv1beta1denommetadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|denom|path|string|true|denom is the coin denom to query the metadata for.|

> Example responses

> 200 Response

<h3 id="cosmosbankv1beta1denommetadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|Inline|
|default|Default|An unexpected error response.|Inline|

<h3 id="cosmosbankv1beta1denommetadata-responseschema">Response Schema</h3>

Status Code **200**

*QueryDenomMetadataResponse is the response type for the Query/DenomMetadata RPC
method.*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» metadata|object|false|none|Metadata represents a struct that describes<br>a basic token.|
|»» description|string|false|none|none|
|»» denomUnits|[object]|false|none|none|
|»»» denom|string|false|none|denom represents the string name of the given denom unit (e.g uatom).|
|»»» exponent|integer(int64)|false|none|exponent represents power of 10 exponent that one must<br>raise the base_denom to in order to equal the given DenomUnit's denom<br>1 denom = 1^exponent base_denom<br>(e.g. with a base_denom of uatom, one can create a DenomUnit of 'atom' with<br>exponent = 6, thus: 1 atom = 10^6 uatom).|
|»»» aliases|[string]|false|none|none|
|»» base|string|false|none|base represents the base denom (should be the DenomUnit with exponent = 0).|
|»» display|string|false|none|display indicates the suggested denom that should be<br>displayed in clients.|
|»» name|string|false|none|Since: cosmos-sdk 0.43|
|»» symbol|string|false|none|symbol is the token symbol usually shown on exchanges (eg: ATOM). This can<br>be the same as the display.<br><br>Since: cosmos-sdk 0.43|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int32)|false|none|none|
|» message|string|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|any|false|none|none|
|»» @type|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## CosmosBankV1Beta1Params

<a id="opIdCosmosBankV1Beta1Params"></a>

`GET /cosmos/bank/v1beta1/params`

*Params queries the parameters of x/bank module.*

> Example responses

> 200 Response

<h3 id="cosmosbankv1beta1params-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|Inline|
|default|Default|An unexpected error response.|Inline|

<h3 id="cosmosbankv1beta1params-responseschema">Response Schema</h3>

Status Code **200**

*QueryParamsResponse defines the response type for querying x/bank parameters.*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» params|object|false|none|Params defines the parameters for the bank module.|
|»» sendEnabled|[object]|false|none|none|
|»»» denom|string|false|none|none|
|»»» enabled|boolean|false|none|none|
|»» defaultSendEnabled|boolean|false|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int32)|false|none|none|
|» message|string|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|any|false|none|none|
|»» @type|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## CosmosBankV1Beta1TotalSupply

<a id="opIdCosmosBankV1Beta1TotalSupply"></a>

`GET /cosmos/bank/v1beta1/supply`

*TotalSupply queries the total supply of all coins.*

<h3 id="cosmosbankv1beta1totalsupply-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pagination.key|query|string(byte)|false|key is a value returned in PageResponse.next_key to begin|
|pagination.offset|query|string(uint64)|false|offset is a numeric offset that can be used when key is unavailable.|
|pagination.limit|query|string(uint64)|false|limit is the total number of results to be returned in the result page.|
|pagination.countTotal|query|boolean|false|count_total is set to true  to indicate that the result set should include|
|pagination.reverse|query|boolean|false|reverse is set to true if results are to be returned in the descending order.|

#### Detailed descriptions

**pagination.key**: key is a value returned in PageResponse.next_key to begin
querying the next page most efficiently. Only one of offset or key
should be set.

**pagination.offset**: offset is a numeric offset that can be used when key is unavailable.
It is less efficient than using key. Only one of offset or key should
be set.

**pagination.limit**: limit is the total number of results to be returned in the result page.
If left empty it will default to a value to be set by each app.

**pagination.countTotal**: count_total is set to true  to indicate that the result set should include
a count of the total number of items available for pagination in UIs.
count_total is only respected when offset is used. It is ignored when key
is set.

**pagination.reverse**: reverse is set to true if results are to be returned in the descending order.

Since: cosmos-sdk 0.43

> Example responses

> 200 Response

<h3 id="cosmosbankv1beta1totalsupply-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|Inline|
|default|Default|An unexpected error response.|Inline|

<h3 id="cosmosbankv1beta1totalsupply-responseschema">Response Schema</h3>

Status Code **200**

*QueryTotalSupplyResponse is the response type for the Query/TotalSupply RPC
method*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» supply|[object]|false|none|none|
|»» denom|string|false|none|none|
|»» amount|string|false|none|none|
|» pagination|object|false|none|pagination defines the pagination in the response.<br><br>Since: cosmos-sdk 0.43|
|»» nextKey|string(byte)|false|none|none|
|»» total|string(uint64)|false|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int32)|false|none|none|
|» message|string|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|any|false|none|none|
|»» @type|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## CosmosBankV1Beta1SupplyOf

<a id="opIdCosmosBankV1Beta1SupplyOf"></a>

`GET /cosmos/bank/v1beta1/supply/{denom}`

*SupplyOf queries the supply of a single coin.*

<h3 id="cosmosbankv1beta1supplyof-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|denom|path|string|true|denom is the coin denom to query balances for.|

> Example responses

> 200 Response

<h3 id="cosmosbankv1beta1supplyof-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|Inline|
|default|Default|An unexpected error response.|Inline|

<h3 id="cosmosbankv1beta1supplyof-responseschema">Response Schema</h3>

Status Code **200**

*QuerySupplyOfResponse is the response type for the Query/SupplyOf RPC method.*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» amount|object|false|none|Coin defines a token with a denomination and an amount.<br><br>NOTE: The amount field is an Int which implements the custom method<br>signatures required by gogoproto.|
|»» denom|string|false|none|none|
|»» amount|string|false|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int32)|false|none|none|
|» message|string|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|any|false|none|none|
|»» @type|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## CosmosDistributionV1Beta1CommunityPool

<a id="opIdCosmosDistributionV1Beta1CommunityPool"></a>

`GET /cosmos/distribution/v1beta1/community_pool`

*CommunityPool queries the community pool coins.*

> Example responses

> 200 Response

<h3 id="cosmosdistributionv1beta1communitypool-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|Inline|
|default|Default|An unexpected error response.|Inline|

<h3 id="cosmosdistributionv1beta1communitypool-responseschema">Response Schema</h3>

Status Code **200**

*QueryCommunityPoolResponse is the response type for the Query/CommunityPool
RPC method.*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» pool|[object]|false|none|pool defines community pool's coins.|
|»» denom|string|false|none|none|
|»» amount|string|false|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int32)|false|none|none|
|» message|string|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|any|false|none|none|
|»» @type|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## CosmosDistributionV1Beta1DelegationTotalRewards

<a id="opIdCosmosDistributionV1Beta1DelegationTotalRewards"></a>

`GET /cosmos/distribution/v1beta1/delegators/{delegatorAddress}/rewards`

*DelegationTotalRewards queries the total rewards accrued by a each
validator.*

<h3 id="cosmosdistributionv1beta1delegationtotalrewards-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|delegatorAddress|path|string|true|delegator_address defines the delegator address to query for.|

> Example responses

> 200 Response

<h3 id="cosmosdistributionv1beta1delegationtotalrewards-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|Inline|
|default|Default|An unexpected error response.|Inline|

<h3 id="cosmosdistributionv1beta1delegationtotalrewards-responseschema">Response Schema</h3>

Status Code **200**

*QueryDelegationTotalRewardsResponse is the response type for the
Query/DelegationTotalRewards RPC method.*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» rewards|[object]|false|none|rewards defines all the rewards accrued by a delegator.|
|»» validatorAddress|string|false|none|none|
|»» reward|[object]|false|none|none|
|»»» denom|string|false|none|none|
|»»» amount|string|false|none|none|
|» total|[object]|false|none|total defines the sum of all the rewards.|
|»» denom|string|false|none|none|
|»» amount|string|false|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int32)|false|none|none|
|» message|string|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|any|false|none|none|
|»» @type|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## CosmosDistributionV1Beta1DelegationRewards

<a id="opIdCosmosDistributionV1Beta1DelegationRewards"></a>

`GET /cosmos/distribution/v1beta1/delegators/{delegatorAddress}/rewards/{validatorAddress}`

*DelegationRewards queries the total rewards accrued by a delegation.*

<h3 id="cosmosdistributionv1beta1delegationrewards-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|delegatorAddress|path|string|true|delegator_address defines the delegator address to query for.|
|validatorAddress|path|string|true|validator_address defines the validator address to query for.|

> Example responses

> 200 Response

<h3 id="cosmosdistributionv1beta1delegationrewards-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|Inline|
|default|Default|An unexpected error response.|Inline|

<h3 id="cosmosdistributionv1beta1delegationrewards-responseschema">Response Schema</h3>

Status Code **200**

*QueryDelegationRewardsResponse is the response type for the
Query/DelegationRewards RPC method.*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» rewards|[object]|false|none|rewards defines the rewards accrued by a delegation.|
|»» denom|string|false|none|none|
|»» amount|string|false|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int32)|false|none|none|
|» message|string|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|any|false|none|none|
|»» @type|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## CosmosDistributionV1Beta1DelegatorValidators

<a id="opIdCosmosDistributionV1Beta1DelegatorValidators"></a>

`GET /cosmos/distribution/v1beta1/delegators/{delegatorAddress}/validators`

*DelegatorValidators queries the validators of a delegator.*

<h3 id="cosmosdistributionv1beta1delegatorvalidators-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|delegatorAddress|path|string|true|delegator_address defines the delegator address to query for.|

> Example responses

> 200 Response

<h3 id="cosmosdistributionv1beta1delegatorvalidators-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|Inline|
|default|Default|An unexpected error response.|Inline|

<h3 id="cosmosdistributionv1beta1delegatorvalidators-responseschema">Response Schema</h3>

Status Code **200**

*QueryDelegatorValidatorsResponse is the response type for the
Query/DelegatorValidators RPC method.*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» validators|[string]|false|none|validators defines the validators a delegator is delegating for.|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int32)|false|none|none|
|» message|string|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|any|false|none|none|
|»» @type|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## CosmosDistributionV1Beta1DelegatorWithdrawAddress

<a id="opIdCosmosDistributionV1Beta1DelegatorWithdrawAddress"></a>

`GET /cosmos/distribution/v1beta1/delegators/{delegatorAddress}/withdraw_address`

*DelegatorWithdrawAddress queries withdraw address of a delegator.*

<h3 id="cosmosdistributionv1beta1delegatorwithdrawaddress-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|delegatorAddress|path|string|true|delegator_address defines the delegator address to query for.|

> Example responses

> 200 Response

<h3 id="cosmosdistributionv1beta1delegatorwithdrawaddress-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|Inline|
|default|Default|An unexpected error response.|Inline|

<h3 id="cosmosdistributionv1beta1delegatorwithdrawaddress-responseschema">Response Schema</h3>

Status Code **200**

*QueryDelegatorWithdrawAddressResponse is the response type for the
Query/DelegatorWithdrawAddress RPC method.*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» withdrawAddress|string|false|none|withdraw_address defines the delegator address to query for.|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int32)|false|none|none|
|» message|string|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|any|false|none|none|
|»» @type|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## CosmosDistributionV1Beta1Params

<a id="opIdCosmosDistributionV1Beta1Params"></a>

`GET /cosmos/distribution/v1beta1/params`

*Params queries params of the distribution module.*

> Example responses

> 200 Response

<h3 id="cosmosdistributionv1beta1params-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|Inline|
|default|Default|An unexpected error response.|Inline|

<h3 id="cosmosdistributionv1beta1params-responseschema">Response Schema</h3>

Status Code **200**

*QueryParamsResponse is the response type for the Query/Params RPC method.*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» params|object|false|none|params defines the parameters of the module.|
|»» communityTax|string|false|none|none|
|»» baseProposerReward|string|false|none|none|
|»» bonusProposerReward|string|false|none|none|
|»» withdrawAddrEnabled|boolean|false|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int32)|false|none|none|
|» message|string|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|any|false|none|none|
|»» @type|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## CosmosDistributionV1Beta1ValidatorCommission

<a id="opIdCosmosDistributionV1Beta1ValidatorCommission"></a>

`GET /cosmos/distribution/v1beta1/validators/{validatorAddress}/commission`

*ValidatorCommission queries accumulated commission for a validator.*

<h3 id="cosmosdistributionv1beta1validatorcommission-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|validatorAddress|path|string|true|validator_address defines the validator address to query for.|

> Example responses

> 200 Response

<h3 id="cosmosdistributionv1beta1validatorcommission-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|Inline|
|default|Default|An unexpected error response.|Inline|

<h3 id="cosmosdistributionv1beta1validatorcommission-responseschema">Response Schema</h3>

Status Code **200**

*QueryValidatorCommissionResponse is the response type for the
Query/ValidatorCommission RPC method*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» commission|object|false|none|commission defines the commision the validator received.|
|»» commission|[object]|false|none|none|
|»»» denom|string|false|none|none|
|»»» amount|string|false|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int32)|false|none|none|
|» message|string|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|any|false|none|none|
|»» @type|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## CosmosDistributionV1Beta1ValidatorOutstandingRewards

<a id="opIdCosmosDistributionV1Beta1ValidatorOutstandingRewards"></a>

`GET /cosmos/distribution/v1beta1/validators/{validatorAddress}/outstanding_rewards`

*ValidatorOutstandingRewards queries rewards of a validator address.*

<h3 id="cosmosdistributionv1beta1validatoroutstandingrewards-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|validatorAddress|path|string|true|validator_address defines the validator address to query for.|

> Example responses

> 200 Response

<h3 id="cosmosdistributionv1beta1validatoroutstandingrewards-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|Inline|
|default|Default|An unexpected error response.|Inline|

<h3 id="cosmosdistributionv1beta1validatoroutstandingrewards-responseschema">Response Schema</h3>

Status Code **200**

*QueryValidatorOutstandingRewardsResponse is the response type for the
Query/ValidatorOutstandingRewards RPC method.*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» rewards|object|false|none|ValidatorOutstandingRewards represents outstanding (un-withdrawn) rewards<br>for a validator inexpensive to track, allows simple sanity checks.|
|»» rewards|[object]|false|none|none|
|»»» denom|string|false|none|none|
|»»» amount|string|false|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int32)|false|none|none|
|» message|string|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|any|false|none|none|
|»» @type|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## CosmosDistributionV1Beta1ValidatorSlashes

<a id="opIdCosmosDistributionV1Beta1ValidatorSlashes"></a>

`GET /cosmos/distribution/v1beta1/validators/{validatorAddress}/slashes`

*ValidatorSlashes queries slash events of a validator.*

<h3 id="cosmosdistributionv1beta1validatorslashes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|validatorAddress|path|string|true|validator_address defines the validator address to query for.|
|startingHeight|query|string(uint64)|false|starting_height defines the optional starting height to query the slashes.|
|endingHeight|query|string(uint64)|false|starting_height defines the optional ending height to query the slashes.|
|pagination.key|query|string(byte)|false|key is a value returned in PageResponse.next_key to begin|
|pagination.offset|query|string(uint64)|false|offset is a numeric offset that can be used when key is unavailable.|
|pagination.limit|query|string(uint64)|false|limit is the total number of results to be returned in the result page.|
|pagination.countTotal|query|boolean|false|count_total is set to true  to indicate that the result set should include|
|pagination.reverse|query|boolean|false|reverse is set to true if results are to be returned in the descending order.|

#### Detailed descriptions

**pagination.key**: key is a value returned in PageResponse.next_key to begin
querying the next page most efficiently. Only one of offset or key
should be set.

**pagination.offset**: offset is a numeric offset that can be used when key is unavailable.
It is less efficient than using key. Only one of offset or key should
be set.

**pagination.limit**: limit is the total number of results to be returned in the result page.
If left empty it will default to a value to be set by each app.

**pagination.countTotal**: count_total is set to true  to indicate that the result set should include
a count of the total number of items available for pagination in UIs.
count_total is only respected when offset is used. It is ignored when key
is set.

**pagination.reverse**: reverse is set to true if results are to be returned in the descending order.

Since: cosmos-sdk 0.43

> Example responses

> 200 Response

<h3 id="cosmosdistributionv1beta1validatorslashes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|Inline|
|default|Default|An unexpected error response.|Inline|

<h3 id="cosmosdistributionv1beta1validatorslashes-responseschema">Response Schema</h3>

Status Code **200**

*QueryValidatorSlashesResponse is the response type for the
Query/ValidatorSlashes RPC method.*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» slashes|[object]|false|none|slashes defines the slashes the validator received.|
|»» validatorPeriod|string(uint64)|false|none|none|
|»» fraction|string|false|none|none|
|» pagination|object|false|none|pagination defines the pagination in the response.|
|»» nextKey|string(byte)|false|none|none|
|»» total|string(uint64)|false|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int32)|false|none|none|
|» message|string|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|any|false|none|none|
|»» @type|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## CosmosEvidenceV1Beta1AllEvidence

<a id="opIdCosmosEvidenceV1Beta1AllEvidence"></a>

`GET /cosmos/evidence/v1beta1/evidence`

*AllEvidence queries all evidence.*

<h3 id="cosmosevidencev1beta1allevidence-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pagination.key|query|string(byte)|false|key is a value returned in PageResponse.next_key to begin|
|pagination.offset|query|string(uint64)|false|offset is a numeric offset that can be used when key is unavailable.|
|pagination.limit|query|string(uint64)|false|limit is the total number of results to be returned in the result page.|
|pagination.countTotal|query|boolean|false|count_total is set to true  to indicate that the result set should include|
|pagination.reverse|query|boolean|false|reverse is set to true if results are to be returned in the descending order.|

#### Detailed descriptions

**pagination.key**: key is a value returned in PageResponse.next_key to begin
querying the next page most efficiently. Only one of offset or key
should be set.

**pagination.offset**: offset is a numeric offset that can be used when key is unavailable.
It is less efficient than using key. Only one of offset or key should
be set.

**pagination.limit**: limit is the total number of results to be returned in the result page.
If left empty it will default to a value to be set by each app.

**pagination.countTotal**: count_total is set to true  to indicate that the result set should include
a count of the total number of items available for pagination in UIs.
count_total is only respected when offset is used. It is ignored when key
is set.

**pagination.reverse**: reverse is set to true if results are to be returned in the descending order.

Since: cosmos-sdk 0.43

> Example responses

> 200 Response

<h3 id="cosmosevidencev1beta1allevidence-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|Inline|
|default|Default|An unexpected error response.|Inline|

<h3 id="cosmosevidencev1beta1allevidence-responseschema">Response Schema</h3>

Status Code **200**

*QueryAllEvidenceResponse is the response type for the Query/AllEvidence RPC
method.*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» evidence|[object]|false|none|evidence returns all evidences.|
|»» **additionalProperties**|any|false|none|none|
|»» @type|string|false|none|A URL/resource name that uniquely identifies the type of the serialized<br>protocol buffer message. This string must contain at least<br>one "/" character. The last segment of the URL's path must represent<br>the fully qualified name of the type (as in<br>`path/google.protobuf.Duration`). The name should be in a canonical form<br>(e.g., leading "." is not accepted).<br><br>In practice, teams usually precompile into the binary all types that they<br>expect it to use in the context of Any. However, for URLs which use the<br>scheme `http`, `https`, or no scheme, one can optionally set up a type<br>server that maps type URLs to message definitions as follows:<br><br>* If no scheme is provided, `https` is assumed.<br>* An HTTP GET on the URL must yield a [google.protobuf.Type][]<br>  value in binary format, or produce an error.<br>* Applications are allowed to cache lookup results based on the<br>  URL, or have them precompiled into a binary to avoid any<br>  lookup. Therefore, binary compatibility needs to be preserved<br>  on changes to types. (Use versioned type names to manage<br>  breaking changes.)<br><br>Note: this functionality is not currently available in the official<br>protobuf release, and it is not used for type URLs beginning with<br>type.googleapis.com.<br><br>Schemes other than `http`, `https` (or the empty scheme) might be<br>used with implementation specific semantics.|
|» pagination|object|false|none|pagination defines the pagination in the response.|
|»» nextKey|string(byte)|false|none|none|
|»» total|string(uint64)|false|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int32)|false|none|none|
|» message|string|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|any|false|none|none|
|»» @type|string|false|none|A URL/resource name that uniquely identifies the type of the serialized<br>protocol buffer message. This string must contain at least<br>one "/" character. The last segment of the URL's path must represent<br>the fully qualified name of the type (as in<br>`path/google.protobuf.Duration`). The name should be in a canonical form<br>(e.g., leading "." is not accepted).<br><br>In practice, teams usually precompile into the binary all types that they<br>expect it to use in the context of Any. However, for URLs which use the<br>scheme `http`, `https`, or no scheme, one can optionally set up a type<br>server that maps type URLs to message definitions as follows:<br><br>* If no scheme is provided, `https` is assumed.<br>* An HTTP GET on the URL must yield a [google.protobuf.Type][]<br>  value in binary format, or produce an error.<br>* Applications are allowed to cache lookup results based on the<br>  URL, or have them precompiled into a binary to avoid any<br>  lookup. Therefore, binary compatibility needs to be preserved<br>  on changes to types. (Use versioned type names to manage<br>  breaking changes.)<br><br>Note: this functionality is not currently available in the official<br>protobuf release, and it is not used for type URLs beginning with<br>type.googleapis.com.<br><br>Schemes other than `http`, `https` (or the empty scheme) might be<br>used with implementation specific semantics.|

<aside class="success">
This operation does not require authentication
</aside>

## CosmosEvidenceV1Beta1Evidence

<a id="opIdCosmosEvidenceV1Beta1Evidence"></a>

`GET /cosmos/evidence/v1beta1/evidence/{evidenceHash}`

*Evidence queries evidence based on evidence hash.*

<h3 id="cosmosevidencev1beta1evidence-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|evidenceHash|path|string(byte)|true|evidence_hash defines the hash of the requested evidence.|

> Example responses

> 200 Response

<h3 id="cosmosevidencev1beta1evidence-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|Inline|
|default|Default|An unexpected error response.|Inline|

<h3 id="cosmosevidencev1beta1evidence-responseschema">Response Schema</h3>

Status Code **200**

*QueryEvidenceResponse is the response type for the Query/Evidence RPC method.*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» evidence|object|false|none|`Any` contains an arbitrary serialized protocol buffer message along with a<br>URL that describes the type of the serialized message.<br><br>Protobuf library provides support to pack/unpack Any values in the form<br>of utility functions or additional generated methods of the Any type.<br><br>Example 1: Pack and unpack a message in C++.<br><br>    Foo foo = ...;<br>    Any any;<br>    any.PackFrom(foo);<br>    ...<br>    if (any.UnpackTo(&foo)) {<br>      ...<br>    }<br><br>Example 2: Pack and unpack a message in Java.<br><br>    Foo foo = ...;<br>    Any any = Any.pack(foo);<br>    ...<br>    if (any.is(Foo.class)) {<br>      foo = any.unpack(Foo.class);<br>    }<br><br> Example 3: Pack and unpack a message in Python.<br><br>    foo = Foo(...)<br>    any = Any()<br>    any.Pack(foo)<br>    ...<br>    if any.Is(Foo.DESCRIPTOR):<br>      any.Unpack(foo)<br>      ...<br><br> Example 4: Pack and unpack a message in Go<br><br>     foo := &pb.Foo{...}<br>     any, err := anypb.New(foo)<br>     if err != nil {<br>       ...<br>     }<br>     ...<br>     foo := &pb.Foo{}<br>     if err := any.UnmarshalTo(foo); err != nil {<br>       ...<br>     }<br><br>The pack methods provided by protobuf library will by default use<br>'type.googleapis.com/full.type.name' as the type URL and the unpack<br>methods only use the fully qualified type name after the last '/'<br>in the type URL, for example "foo.bar.com/x/y.z" will yield type<br>name "y.z".<br><br><br>JSON<br>====<br>The JSON representation of an `Any` value uses the regular<br>representation of the deserialized, embedded message, with an<br>additional field `@type` which contains the type URL. Example:<br><br>    package google.profile;<br>    message Person {<br>      string first_name = 1;<br>      string last_name = 2;<br>    }<br><br>    {<br>      "@type": "type.googleapis.com/google.profile.Person",<br>      "firstName": <string>,<br>      "lastName": <string><br>    }<br><br>If the embedded message type is well-known and has a custom JSON<br>representation, that representation will be embedded adding a field<br>`value` which holds the custom JSON in addition to the `@type`<br>field. Example (for message [google.protobuf.Duration][]):<br><br>    {<br>      "@type": "type.googleapis.com/google.protobuf.Duration",<br>      "value": "1.212s"<br>    }|
|»» **additionalProperties**|any|false|none|none|
|»» @type|string|false|none|A URL/resource name that uniquely identifies the type of the serialized<br>protocol buffer message. This string must contain at least<br>one "/" character. The last segment of the URL's path must represent<br>the fully qualified name of the type (as in<br>`path/google.protobuf.Duration`). The name should be in a canonical form<br>(e.g., leading "." is not accepted).<br><br>In practice, teams usually precompile into the binary all types that they<br>expect it to use in the context of Any. However, for URLs which use the<br>scheme `http`, `https`, or no scheme, one can optionally set up a type<br>server that maps type URLs to message definitions as follows:<br><br>* If no scheme is provided, `https` is assumed.<br>* An HTTP GET on the URL must yield a [google.protobuf.Type][]<br>  value in binary format, or produce an error.<br>* Applications are allowed to cache lookup results based on the<br>  URL, or have them precompiled into a binary to avoid any<br>  lookup. Therefore, binary compatibility needs to be preserved<br>  on changes to types. (Use versioned type names to manage<br>  breaking changes.)<br><br>Note: this functionality is not currently available in the official<br>protobuf release, and it is not used for type URLs beginning with<br>type.googleapis.com.<br><br>Schemes other than `http`, `https` (or the empty scheme) might be<br>used with implementation specific semantics.|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int32)|false|none|none|
|» message|string|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|any|false|none|none|
|»» @type|string|false|none|A URL/resource name that uniquely identifies the type of the serialized<br>protocol buffer message. This string must contain at least<br>one "/" character. The last segment of the URL's path must represent<br>the fully qualified name of the type (as in<br>`path/google.protobuf.Duration`). The name should be in a canonical form<br>(e.g., leading "." is not accepted).<br><br>In practice, teams usually precompile into the binary all types that they<br>expect it to use in the context of Any. However, for URLs which use the<br>scheme `http`, `https`, or no scheme, one can optionally set up a type<br>server that maps type URLs to message definitions as follows:<br><br>* If no scheme is provided, `https` is assumed.<br>* An HTTP GET on the URL must yield a [google.protobuf.Type][]<br>  value in binary format, or produce an error.<br>* Applications are allowed to cache lookup results based on the<br>  URL, or have them precompiled into a binary to avoid any<br>  lookup. Therefore, binary compatibility needs to be preserved<br>  on changes to types. (Use versioned type names to manage<br>  breaking changes.)<br><br>Note: this functionality is not currently available in the official<br>protobuf release, and it is not used for type URLs beginning with<br>type.googleapis.com.<br><br>Schemes other than `http`, `https` (or the empty scheme) might be<br>used with implementation specific semantics.|

<aside class="success">
This operation does not require authentication
</aside>

## CosmosFeegrantV1Beta1Allowance

<a id="opIdCosmosFeegrantV1Beta1Allowance"></a>

`GET /cosmos/feegrant/v1beta1/allowance/{granter}/{grantee}`

*Allowance returns fee granted to the grantee by the granter.*

<h3 id="cosmosfeegrantv1beta1allowance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|granter|path|string|true|granter is the address of the user granting an allowance of their funds.|
|grantee|path|string|true|grantee is the address of the user being granted an allowance of another user's funds.|

> Example responses

> 200 Response

<h3 id="cosmosfeegrantv1beta1allowance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|Inline|
|default|Default|An unexpected error response.|Inline|

<h3 id="cosmosfeegrantv1beta1allowance-responseschema">Response Schema</h3>

Status Code **200**

*QueryAllowanceResponse is the response type for the Query/Allowance RPC method.*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» allowance|object|false|none|allowance is a allowance granted for grantee by granter.|
|»» granter|string|false|none|granter is the address of the user granting an allowance of their funds.|
|»» grantee|string|false|none|grantee is the address of the user being granted an allowance of another user's funds.|
|»» allowance|object|false|none|allowance can be any of basic and filtered fee allowance.|
|»»» **additionalProperties**|any|false|none|none|
|»»» @type|string|false|none|A URL/resource name that uniquely identifies the type of the serialized<br>protocol buffer message. This string must contain at least<br>one "/" character. The last segment of the URL's path must represent<br>the fully qualified name of the type (as in<br>`path/google.protobuf.Duration`). The name should be in a canonical form<br>(e.g., leading "." is not accepted).<br><br>In practice, teams usually precompile into the binary all types that they<br>expect it to use in the context of Any. However, for URLs which use the<br>scheme `http`, `https`, or no scheme, one can optionally set up a type<br>server that maps type URLs to message definitions as follows:<br><br>* If no scheme is provided, `https` is assumed.<br>* An HTTP GET on the URL must yield a [google.protobuf.Type][]<br>  value in binary format, or produce an error.<br>* Applications are allowed to cache lookup results based on the<br>  URL, or have them precompiled into a binary to avoid any<br>  lookup. Therefore, binary compatibility needs to be preserved<br>  on changes to types. (Use versioned type names to manage<br>  breaking changes.)<br><br>Note: this functionality is not currently available in the official<br>protobuf release, and it is not used for type URLs beginning with<br>type.googleapis.com.<br><br>Schemes other than `http`, `https` (or the empty scheme) might be<br>used with implementation specific semantics.|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int32)|false|none|none|
|» message|string|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|any|false|none|none|
|»» @type|string|false|none|A URL/resource name that uniquely identifies the type of the serialized<br>protocol buffer message. This string must contain at least<br>one "/" character. The last segment of the URL's path must represent<br>the fully qualified name of the type (as in<br>`path/google.protobuf.Duration`). The name should be in a canonical form<br>(e.g., leading "." is not accepted).<br><br>In practice, teams usually precompile into the binary all types that they<br>expect it to use in the context of Any. However, for URLs which use the<br>scheme `http`, `https`, or no scheme, one can optionally set up a type<br>server that maps type URLs to message definitions as follows:<br><br>* If no scheme is provided, `https` is assumed.<br>* An HTTP GET on the URL must yield a [google.protobuf.Type][]<br>  value in binary format, or produce an error.<br>* Applications are allowed to cache lookup results based on the<br>  URL, or have them precompiled into a binary to avoid any<br>  lookup. Therefore, binary compatibility needs to be preserved<br>  on changes to types. (Use versioned type names to manage<br>  breaking changes.)<br><br>Note: this functionality is not currently available in the official<br>protobuf release, and it is not used for type URLs beginning with<br>type.googleapis.com.<br><br>Schemes other than `http`, `https` (or the empty scheme) might be<br>used with implementation specific semantics.|

<aside class="success">
This operation does not require authentication
</aside>

## CosmosFeegrantV1Beta1Allowances

<a id="opIdCosmosFeegrantV1Beta1Allowances"></a>

`GET /cosmos/feegrant/v1beta1/allowances/{grantee}`

*Allowances returns all the grants for address.*

<h3 id="cosmosfeegrantv1beta1allowances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|grantee|path|string|true|none|
|pagination.key|query|string(byte)|false|key is a value returned in PageResponse.next_key to begin|
|pagination.offset|query|string(uint64)|false|offset is a numeric offset that can be used when key is unavailable.|
|pagination.limit|query|string(uint64)|false|limit is the total number of results to be returned in the result page.|
|pagination.countTotal|query|boolean|false|count_total is set to true  to indicate that the result set should include|
|pagination.reverse|query|boolean|false|reverse is set to true if results are to be returned in the descending order.|

#### Detailed descriptions

**pagination.key**: key is a value returned in PageResponse.next_key to begin
querying the next page most efficiently. Only one of offset or key
should be set.

**pagination.offset**: offset is a numeric offset that can be used when key is unavailable.
It is less efficient than using key. Only one of offset or key should
be set.

**pagination.limit**: limit is the total number of results to be returned in the result page.
If left empty it will default to a value to be set by each app.

**pagination.countTotal**: count_total is set to true  to indicate that the result set should include
a count of the total number of items available for pagination in UIs.
count_total is only respected when offset is used. It is ignored when key
is set.

**pagination.reverse**: reverse is set to true if results are to be returned in the descending order.

Since: cosmos-sdk 0.43

> Example responses

> 200 Response

<h3 id="cosmosfeegrantv1beta1allowances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|Inline|
|default|Default|An unexpected error response.|Inline|

<h3 id="cosmosfeegrantv1beta1allowances-responseschema">Response Schema</h3>

Status Code **200**

*QueryAllowancesResponse is the response type for the Query/Allowances RPC method.*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» allowances|[object]|false|none|allowances are allowance's granted for grantee by granter.|
|»» Grant is stored in the KVStore to record a grant with full context|object|false|none|none|
|»»» granter|string|false|none|granter is the address of the user granting an allowance of their funds.|
|»»» grantee|string|false|none|grantee is the address of the user being granted an allowance of another user's funds.|
|»»» allowance|object|false|none|allowance can be any of basic and filtered fee allowance.|
|»»»» **additionalProperties**|any|false|none|none|
|»»»» @type|string|false|none|A URL/resource name that uniquely identifies the type of the serialized<br>protocol buffer message. This string must contain at least<br>one "/" character. The last segment of the URL's path must represent<br>the fully qualified name of the type (as in<br>`path/google.protobuf.Duration`). The name should be in a canonical form<br>(e.g., leading "." is not accepted).<br><br>In practice, teams usually precompile into the binary all types that they<br>expect it to use in the context of Any. However, for URLs which use the<br>scheme `http`, `https`, or no scheme, one can optionally set up a type<br>server that maps type URLs to message definitions as follows:<br><br>* If no scheme is provided, `https` is assumed.<br>* An HTTP GET on the URL must yield a [google.protobuf.Type][]<br>  value in binary format, or produce an error.<br>* Applications are allowed to cache lookup results based on the<br>  URL, or have them precompiled into a binary to avoid any<br>  lookup. Therefore, binary compatibility needs to be preserved<br>  on changes to types. (Use versioned type names to manage<br>  breaking changes.)<br><br>Note: this functionality is not currently available in the official<br>protobuf release, and it is not used for type URLs beginning with<br>type.googleapis.com.<br><br>Schemes other than `http`, `https` (or the empty scheme) might be<br>used with implementation specific semantics.|
|» pagination|object|false|none|pagination defines an pagination for the response.|
|»» nextKey|string(byte)|false|none|none|
|»» total|string(uint64)|false|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int32)|false|none|none|
|» message|string|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|any|false|none|none|
|»» @type|string|false|none|A URL/resource name that uniquely identifies the type of the serialized<br>protocol buffer message. This string must contain at least<br>one "/" character. The last segment of the URL's path must represent<br>the fully qualified name of the type (as in<br>`path/google.protobuf.Duration`). The name should be in a canonical form<br>(e.g., leading "." is not accepted).<br><br>In practice, teams usually precompile into the binary all types that they<br>expect it to use in the context of Any. However, for URLs which use the<br>scheme `http`, `https`, or no scheme, one can optionally set up a type<br>server that maps type URLs to message definitions as follows:<br><br>* If no scheme is provided, `https` is assumed.<br>* An HTTP GET on the URL must yield a [google.protobuf.Type][]<br>  value in binary format, or produce an error.<br>* Applications are allowed to cache lookup results based on the<br>  URL, or have them precompiled into a binary to avoid any<br>  lookup. Therefore, binary compatibility needs to be preserved<br>  on changes to types. (Use versioned type names to manage<br>  breaking changes.)<br><br>Note: this functionality is not currently available in the official<br>protobuf release, and it is not used for type URLs beginning with<br>type.googleapis.com.<br><br>Schemes other than `http`, `https` (or the empty scheme) might be<br>used with implementation specific semantics.|

<aside class="success">
This operation does not require authentication
</aside>

## CosmosGovV1Beta1Params

<a id="opIdCosmosGovV1Beta1Params"></a>

`GET /cosmos/gov/v1beta1/params/{paramsType}`

*Params queries all parameters of the gov module.*

<h3 id="cosmosgovv1beta1params-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|paramsType|path|string|true|params_type defines which parameters to query for, can be one of "voting",|

#### Detailed descriptions

**paramsType**: params_type defines which parameters to query for, can be one of "voting",
"tallying" or "deposit".

> Example responses

> 200 Response

<h3 id="cosmosgovv1beta1params-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|Inline|
|default|Default|An unexpected error response.|Inline|

<h3 id="cosmosgovv1beta1params-responseschema">Response Schema</h3>

Status Code **200**

*QueryParamsResponse is the response type for the Query/Params RPC method.*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» votingParams|object|false|none|voting_params defines the parameters related to voting.|
|»» votingPeriod|string|false|none|Length of the voting period.|
|» depositParams|object|false|none|deposit_params defines the parameters related to deposit.|
|»» minDeposit|[object]|false|none|Minimum deposit for a proposal to enter voting period.|
|»»» denom|string|false|none|none|
|»»» amount|string|false|none|none|
|»» maxDepositPeriod|string|false|none|Maximum period for Atom holders to deposit on a proposal. Initial value: 2<br> months.|
|» tallyParams|object|false|none|tally_params defines the parameters related to tally.|
|»» quorum|string(byte)|false|none|Minimum percentage of total stake needed to vote for a result to be<br> considered valid.|
|»» threshold|string(byte)|false|none|Minimum proportion of Yes votes for proposal to pass. Default value: 0.5.|
|»» vetoThreshold|string(byte)|false|none|Minimum value of Veto votes to Total votes ratio for proposal to be<br> vetoed. Default value: 1/3.|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int32)|false|none|none|
|» message|string|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|any|false|none|none|
|»» @type|string|false|none|A URL/resource name that uniquely identifies the type of the serialized<br>protocol buffer message. This string must contain at least<br>one "/" character. The last segment of the URL's path must represent<br>the fully qualified name of the type (as in<br>`path/google.protobuf.Duration`). The name should be in a canonical form<br>(e.g., leading "." is not accepted).<br><br>In practice, teams usually precompile into the binary all types that they<br>expect it to use in the context of Any. However, for URLs which use the<br>scheme `http`, `https`, or no scheme, one can optionally set up a type<br>server that maps type URLs to message definitions as follows:<br><br>* If no scheme is provided, `https` is assumed.<br>* An HTTP GET on the URL must yield a [google.protobuf.Type][]<br>  value in binary format, or produce an error.<br>* Applications are allowed to cache lookup results based on the<br>  URL, or have them precompiled into a binary to avoid any<br>  lookup. Therefore, binary compatibility needs to be preserved<br>  on changes to types. (Use versioned type names to manage<br>  breaking changes.)<br><br>Note: this functionality is not currently available in the official<br>protobuf release, and it is not used for type URLs beginning with<br>type.googleapis.com.<br><br>Schemes other than `http`, `https` (or the empty scheme) might be<br>used with implementation specific semantics.|

<aside class="success">
This operation does not require authentication
</aside>

## CosmosGovV1Beta1Proposals

<a id="opIdCosmosGovV1Beta1Proposals"></a>

`GET /cosmos/gov/v1beta1/proposals`

*Proposals queries all proposals based on given status.*

<h3 id="cosmosgovv1beta1proposals-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|proposalStatus|query|string|false|proposal_status defines the status of the proposals.|
|voter|query|string|false|voter defines the voter address for the proposals.|
|depositor|query|string|false|depositor defines the deposit addresses from the proposals.|
|pagination.key|query|string(byte)|false|key is a value returned in PageResponse.next_key to begin|
|pagination.offset|query|string(uint64)|false|offset is a numeric offset that can be used when key is unavailable.|
|pagination.limit|query|string(uint64)|false|limit is the total number of results to be returned in the result page.|
|pagination.countTotal|query|boolean|false|count_total is set to true  to indicate that the result set should include|
|pagination.reverse|query|boolean|false|reverse is set to true if results are to be returned in the descending order.|

#### Detailed descriptions

**proposalStatus**: proposal_status defines the status of the proposals.

 - PROPOSAL_STATUS_UNSPECIFIED: PROPOSAL_STATUS_UNSPECIFIED defines the default propopsal status.
 - PROPOSAL_STATUS_DEPOSIT_PERIOD: PROPOSAL_STATUS_DEPOSIT_PERIOD defines a proposal status during the deposit
period.
 - PROPOSAL_STATUS_VOTING_PERIOD: PROPOSAL_STATUS_VOTING_PERIOD defines a proposal status during the voting
period.
 - PROPOSAL_STATUS_PASSED: PROPOSAL_STATUS_PASSED defines a proposal status of a proposal that has
passed.
 - PROPOSAL_STATUS_REJECTED: PROPOSAL_STATUS_REJECTED defines a proposal status of a proposal that has
been rejected.
 - PROPOSAL_STATUS_FAILED: PROPOSAL_STATUS_FAILED defines a proposal status of a proposal that has
failed.

**pagination.key**: key is a value returned in PageResponse.next_key to begin
querying the next page most efficiently. Only one of offset or key
should be set.

**pagination.offset**: offset is a numeric offset that can be used when key is unavailable.
It is less efficient than using key. Only one of offset or key should
be set.

**pagination.limit**: limit is the total number of results to be returned in the result page.
If left empty it will default to a value to be set by each app.

**pagination.countTotal**: count_total is set to true  to indicate that the result set should include
a count of the total number of items available for pagination in UIs.
count_total is only respected when offset is used. It is ignored when key
is set.

**pagination.reverse**: reverse is set to true if results are to be returned in the descending order.

Since: cosmos-sdk 0.43

#### Enumerated Values

|Parameter|Value|
|---|---|
|proposalStatus|PROPOSAL_STATUS_UNSPECIFIED|
|proposalStatus|PROPOSAL_STATUS_DEPOSIT_PERIOD|
|proposalStatus|PROPOSAL_STATUS_VOTING_PERIOD|
|proposalStatus|PROPOSAL_STATUS_PASSED|
|proposalStatus|PROPOSAL_STATUS_REJECTED|
|proposalStatus|PROPOSAL_STATUS_FAILED|

> Example responses

> 200 Response

<h3 id="cosmosgovv1beta1proposals-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|Inline|
|default|Default|An unexpected error response.|Inline|

<h3 id="cosmosgovv1beta1proposals-responseschema">Response Schema</h3>

Status Code **200**

*QueryProposalsResponse is the response type for the Query/Proposals RPC
method.*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» proposals|[object]|false|none|none|
|»» proposalId|string(uint64)|false|none|none|
|»» content|object|false|none|`Any` contains an arbitrary serialized protocol buffer message along with a<br>URL that describes the type of the serialized message.<br><br>Protobuf library provides support to pack/unpack Any values in the form<br>of utility functions or additional generated methods of the Any type.<br><br>Example 1: Pack and unpack a message in C++.<br><br>    Foo foo = ...;<br>    Any any;<br>    any.PackFrom(foo);<br>    ...<br>    if (any.UnpackTo(&foo)) {<br>      ...<br>    }<br><br>Example 2: Pack and unpack a message in Java.<br><br>    Foo foo = ...;<br>    Any any = Any.pack(foo);<br>    ...<br>    if (any.is(Foo.class)) {<br>      foo = any.unpack(Foo.class);<br>    }<br><br> Example 3: Pack and unpack a message in Python.<br><br>    foo = Foo(...)<br>    any = Any()<br>    any.Pack(foo)<br>    ...<br>    if any.Is(Foo.DESCRIPTOR):<br>      any.Unpack(foo)<br>      ...<br><br> Example 4: Pack and unpack a message in Go<br><br>     foo := &pb.Foo{...}<br>     any, err := anypb.New(foo)<br>     if err != nil {<br>       ...<br>     }<br>     ...<br>     foo := &pb.Foo{}<br>     if err := any.UnmarshalTo(foo); err != nil {<br>       ...<br>     }<br><br>The pack methods provided by protobuf library will by default use<br>'type.googleapis.com/full.type.name' as the type URL and the unpack<br>methods only use the fully qualified type name after the last '/'<br>in the type URL, for example "foo.bar.com/x/y.z" will yield type<br>name "y.z".<br><br><br>JSON<br>====<br>The JSON representation of an `Any` value uses the regular<br>representation of the deserialized, embedded message, with an<br>additional field `@type` which contains the type URL. Example:<br><br>    package google.profile;<br>    message Person {<br>      string first_name = 1;<br>      string last_name = 2;<br>    }<br><br>    {<br>      "@type": "type.googleapis.com/google.profile.Person",<br>      "firstName": <string>,<br>      "lastName": <string><br>    }<br><br>If the embedded message type is well-known and has a custom JSON<br>representation, that representation will be embedded adding a field<br>`value` which holds the custom JSON in addition to the `@type`<br>field. Example (for message [google.protobuf.Duration][]):<br><br>    {<br>      "@type": "type.googleapis.com/google.protobuf.Duration",<br>      "value": "1.212s"<br>    }|
|»»» **additionalProperties**|any|false|none|none|
|»»» @type|string|false|none|A URL/resource name that uniquely identifies the type of the serialized<br>protocol buffer message. This string must contain at least<br>one "/" character. The last segment of the URL's path must represent<br>the fully qualified name of the type (as in<br>`path/google.protobuf.Duration`). The name should be in a canonical form<br>(e.g., leading "." is not accepted).<br><br>In practice, teams usually precompile into the binary all types that they<br>expect it to use in the context of Any. However, for URLs which use the<br>scheme `http`, `https`, or no scheme, one can optionally set up a type<br>server that maps type URLs to message definitions as follows:<br><br>* If no scheme is provided, `https` is assumed.<br>* An HTTP GET on the URL must yield a [google.protobuf.Type][]<br>  value in binary format, or produce an error.<br>* Applications are allowed to cache lookup results based on the<br>  URL, or have them precompiled into a binary to avoid any<br>  lookup. Therefore, binary compatibility needs to be preserved<br>  on changes to types. (Use versioned type names to manage<br>  breaking changes.)<br><br>Note: this functionality is not currently available in the official<br>protobuf release, and it is not used for type URLs beginning with<br>type.googleapis.com.<br><br>Schemes other than `http`, `https` (or the empty scheme) might be<br>used with implementation specific semantics.|
|»» status|string|false|none|ProposalStatus enumerates the valid statuses of a proposal.<br><br> - PROPOSAL_STATUS_UNSPECIFIED: PROPOSAL_STATUS_UNSPECIFIED defines the default propopsal status.<br> - PROPOSAL_STATUS_DEPOSIT_PERIOD: PROPOSAL_STATUS_DEPOSIT_PERIOD defines a proposal status during the deposit<br>period.<br> - PROPOSAL_STATUS_VOTING_PERIOD: PROPOSAL_STATUS_VOTING_PERIOD defines a proposal status during the voting<br>period.<br> - PROPOSAL_STATUS_PASSED: PROPOSAL_STATUS_PASSED defines a proposal status of a proposal that has<br>passed.<br> - PROPOSAL_STATUS_REJECTED: PROPOSAL_STATUS_REJECTED defines a proposal status of a proposal that has<br>been rejected.<br> - PROPOSAL_STATUS_FAILED: PROPOSAL_STATUS_FAILED defines a proposal status of a proposal that has<br>failed.|
|»» finalTallyResult|object|false|none|TallyResult defines a standard tally for a governance proposal.|
|»»» yes|string|false|none|none|
|»»» abstain|string|false|none|none|
|»»» no|string|false|none|none|
|»»» noWithVeto|string|false|none|none|
|»» submitTime|string(date-time)|false|none|none|
|»» depositEndTime|string(date-time)|false|none|none|
|»» totalDeposit|[object]|false|none|none|
|»»» denom|string|false|none|none|
|»»» amount|string|false|none|none|
|»» votingStartTime|string(date-time)|false|none|none|
|»» votingEndTime|string(date-time)|false|none|none|
|» pagination|object|false|none|pagination defines the pagination in the response.|
|»» nextKey|string(byte)|false|none|none|
|»» total|string(uint64)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|PROPOSAL_STATUS_UNSPECIFIED|
|status|PROPOSAL_STATUS_DEPOSIT_PERIOD|
|status|PROPOSAL_STATUS_VOTING_PERIOD|
|status|PROPOSAL_STATUS_PASSED|
|status|PROPOSAL_STATUS_REJECTED|
|status|PROPOSAL_STATUS_FAILED|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int32)|false|none|none|
|» message|string|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|any|false|none|none|
|»» @type|string|false|none|A URL/resource name that uniquely identifies the type of the serialized<br>protocol buffer message. This string must contain at least<br>one "/" character. The last segment of the URL's path must represent<br>the fully qualified name of the type (as in<br>`path/google.protobuf.Duration`). The name should be in a canonical form<br>(e.g., leading "." is not accepted).<br><br>In practice, teams usually precompile into the binary all types that they<br>expect it to use in the context of Any. However, for URLs which use the<br>scheme `http`, `https`, or no scheme, one can optionally set up a type<br>server that maps type URLs to message definitions as follows:<br><br>* If no scheme is provided, `https` is assumed.<br>* An HTTP GET on the URL must yield a [google.protobuf.Type][]<br>  value in binary format, or produce an error.<br>* Applications are allowed to cache lookup results based on the<br>  URL, or have them precompiled into a binary to avoid any<br>  lookup. Therefore, binary compatibility needs to be preserved<br>  on changes to types. (Use versioned type names to manage<br>  breaking changes.)<br><br>Note: this functionality is not currently available in the official<br>protobuf release, and it is not used for type URLs beginning with<br>type.googleapis.com.<br><br>Schemes other than `http`, `https` (or the empty scheme) might be<br>used with implementation specific semantics.|

<aside class="success">
This operation does not require authentication
</aside>

## CosmosGovV1Beta1Proposal

<a id="opIdCosmosGovV1Beta1Proposal"></a>

`GET /cosmos/gov/v1beta1/proposals/{proposalId}`

*Proposal queries proposal details based on ProposalID.*

<h3 id="cosmosgovv1beta1proposal-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|proposalId|path|string(uint64)|true|proposal_id defines the unique id of the proposal.|

> Example responses

> 200 Response

<h3 id="cosmosgovv1beta1proposal-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|Inline|
|default|Default|An unexpected error response.|Inline|

<h3 id="cosmosgovv1beta1proposal-responseschema">Response Schema</h3>

Status Code **200**

*QueryProposalResponse is the response type for the Query/Proposal RPC method.*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» proposal|object|false|none|Proposal defines the core field members of a governance proposal.|
|»» proposalId|string(uint64)|false|none|none|
|»» content|object|false|none|`Any` contains an arbitrary serialized protocol buffer message along with a<br>URL that describes the type of the serialized message.<br><br>Protobuf library provides support to pack/unpack Any values in the form<br>of utility functions or additional generated methods of the Any type.<br><br>Example 1: Pack and unpack a message in C++.<br><br>    Foo foo = ...;<br>    Any any;<br>    any.PackFrom(foo);<br>    ...<br>    if (any.UnpackTo(&foo)) {<br>      ...<br>    }<br><br>Example 2: Pack and unpack a message in Java.<br><br>    Foo foo = ...;<br>    Any any = Any.pack(foo);<br>    ...<br>    if (any.is(Foo.class)) {<br>      foo = any.unpack(Foo.class);<br>    }<br><br> Example 3: Pack and unpack a message in Python.<br><br>    foo = Foo(...)<br>    any = Any()<br>    any.Pack(foo)<br>    ...<br>    if any.Is(Foo.DESCRIPTOR):<br>      any.Unpack(foo)<br>      ...<br><br> Example 4: Pack and unpack a message in Go<br><br>     foo := &pb.Foo{...}<br>     any, err := anypb.New(foo)<br>     if err != nil {<br>       ...<br>     }<br>     ...<br>     foo := &pb.Foo{}<br>     if err := any.UnmarshalTo(foo); err != nil {<br>       ...<br>     }<br><br>The pack methods provided by protobuf library will by default use<br>'type.googleapis.com/full.type.name' as the type URL and the unpack<br>methods only use the fully qualified type name after the last '/'<br>in the type URL, for example "foo.bar.com/x/y.z" will yield type<br>name "y.z".<br><br><br>JSON<br>====<br>The JSON representation of an `Any` value uses the regular<br>representation of the deserialized, embedded message, with an<br>additional field `@type` which contains the type URL. Example:<br><br>    package google.profile;<br>    message Person {<br>      string first_name = 1;<br>      string last_name = 2;<br>    }<br><br>    {<br>      "@type": "type.googleapis.com/google.profile.Person",<br>      "firstName": <string>,<br>      "lastName": <string><br>    }<br><br>If the embedded message type is well-known and has a custom JSON<br>representation, that representation will be embedded adding a field<br>`value` which holds the custom JSON in addition to the `@type`<br>field. Example (for message [google.protobuf.Duration][]):<br><br>    {<br>      "@type": "type.googleapis.com/google.protobuf.Duration",<br>      "value": "1.212s"<br>    }|
|»»» **additionalProperties**|any|false|none|none|
|»»» @type|string|false|none|A URL/resource name that uniquely identifies the type of the serialized<br>protocol buffer message. This string must contain at least<br>one "/" character. The last segment of the URL's path must represent<br>the fully qualified name of the type (as in<br>`path/google.protobuf.Duration`). The name should be in a canonical form<br>(e.g., leading "." is not accepted).<br><br>In practice, teams usually precompile into the binary all types that they<br>expect it to use in the context of Any. However, for URLs which use the<br>scheme `http`, `https`, or no scheme, one can optionally set up a type<br>server that maps type URLs to message definitions as follows:<br><br>* If no scheme is provided, `https` is assumed.<br>* An HTTP GET on the URL must yield a [google.protobuf.Type][]<br>  value in binary format, or produce an error.<br>* Applications are allowed to cache lookup results based on the<br>  URL, or have them precompiled into a binary to avoid any<br>  lookup. Therefore, binary compatibility needs to be preserved<br>  on changes to types. (Use versioned type names to manage<br>  breaking changes.)<br><br>Note: this functionality is not currently available in the official<br>protobuf release, and it is not used for type URLs beginning with<br>type.googleapis.com.<br><br>Schemes other than `http`, `https` (or the empty scheme) might be<br>used with implementation specific semantics.|
|»» status|string|false|none|ProposalStatus enumerates the valid statuses of a proposal.<br><br> - PROPOSAL_STATUS_UNSPECIFIED: PROPOSAL_STATUS_UNSPECIFIED defines the default propopsal status.<br> - PROPOSAL_STATUS_DEPOSIT_PERIOD: PROPOSAL_STATUS_DEPOSIT_PERIOD defines a proposal status during the deposit<br>period.<br> - PROPOSAL_STATUS_VOTING_PERIOD: PROPOSAL_STATUS_VOTING_PERIOD defines a proposal status during the voting<br>period.<br> - PROPOSAL_STATUS_PASSED: PROPOSAL_STATUS_PASSED defines a proposal status of a proposal that has<br>passed.<br> - PROPOSAL_STATUS_REJECTED: PROPOSAL_STATUS_REJECTED defines a proposal status of a proposal that has<br>been rejected.<br> - PROPOSAL_STATUS_FAILED: PROPOSAL_STATUS_FAILED defines a proposal status of a proposal that has<br>failed.|
|»» finalTallyResult|object|false|none|TallyResult defines a standard tally for a governance proposal.|
|»»» yes|string|false|none|none|
|»»» abstain|string|false|none|none|
|»»» no|string|false|none|none|
|»»» noWithVeto|string|false|none|none|
|»» submitTime|string(date-time)|false|none|none|
|»» depositEndTime|string(date-time)|false|none|none|
|»» totalDeposit|[object]|false|none|none|
|»»» denom|string|false|none|none|
|»»» amount|string|false|none|none|
|»» votingStartTime|string(date-time)|false|none|none|
|»» votingEndTime|string(date-time)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|PROPOSAL_STATUS_UNSPECIFIED|
|status|PROPOSAL_STATUS_DEPOSIT_PERIOD|
|status|PROPOSAL_STATUS_VOTING_PERIOD|
|status|PROPOSAL_STATUS_PASSED|
|status|PROPOSAL_STATUS_REJECTED|
|status|PROPOSAL_STATUS_FAILED|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int32)|false|none|none|
|» message|string|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|any|false|none|none|
|»» @type|string|false|none|A URL/resource name that uniquely identifies the type of the serialized<br>protocol buffer message. This string must contain at least<br>one "/" character. The last segment of the URL's path must represent<br>the fully qualified name of the type (as in<br>`path/google.protobuf.Duration`). The name should be in a canonical form<br>(e.g., leading "." is not accepted).<br><br>In practice, teams usually precompile into the binary all types that they<br>expect it to use in the context of Any. However, for URLs which use the<br>scheme `http`, `https`, or no scheme, one can optionally set up a type<br>server that maps type URLs to message definitions as follows:<br><br>* If no scheme is provided, `https` is assumed.<br>* An HTTP GET on the URL must yield a [google.protobuf.Type][]<br>  value in binary format, or produce an error.<br>* Applications are allowed to cache lookup results based on the<br>  URL, or have them precompiled into a binary to avoid any<br>  lookup. Therefore, binary compatibility needs to be preserved<br>  on changes to types. (Use versioned type names to manage<br>  breaking changes.)<br><br>Note: this functionality is not currently available in the official<br>protobuf release, and it is not used for type URLs beginning with<br>type.googleapis.com.<br><br>Schemes other than `http`, `https` (or the empty scheme) might be<br>used with implementation specific semantics.|

<aside class="success">
This operation does not require authentication
</aside>

## CosmosGovV1Beta1Deposits

<a id="opIdCosmosGovV1Beta1Deposits"></a>

`GET /cosmos/gov/v1beta1/proposals/{proposalId}/deposits`

*Deposits queries all deposits of a single proposal.*

<h3 id="cosmosgovv1beta1deposits-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|proposalId|path|string(uint64)|true|proposal_id defines the unique id of the proposal.|
|pagination.key|query|string(byte)|false|key is a value returned in PageResponse.next_key to begin|
|pagination.offset|query|string(uint64)|false|offset is a numeric offset that can be used when key is unavailable.|
|pagination.limit|query|string(uint64)|false|limit is the total number of results to be returned in the result page.|
|pagination.countTotal|query|boolean|false|count_total is set to true  to indicate that the result set should include|
|pagination.reverse|query|boolean|false|reverse is set to true if results are to be returned in the descending order.|

#### Detailed descriptions

**pagination.key**: key is a value returned in PageResponse.next_key to begin
querying the next page most efficiently. Only one of offset or key
should be set.

**pagination.offset**: offset is a numeric offset that can be used when key is unavailable.
It is less efficient than using key. Only one of offset or key should
be set.

**pagination.limit**: limit is the total number of results to be returned in the result page.
If left empty it will default to a value to be set by each app.

**pagination.countTotal**: count_total is set to true  to indicate that the result set should include
a count of the total number of items available for pagination in UIs.
count_total is only respected when offset is used. It is ignored when key
is set.

**pagination.reverse**: reverse is set to true if results are to be returned in the descending order.

Since: cosmos-sdk 0.43

> Example responses

> 200 Response

<h3 id="cosmosgovv1beta1deposits-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|Inline|
|default|Default|An unexpected error response.|Inline|

<h3 id="cosmosgovv1beta1deposits-responseschema">Response Schema</h3>

Status Code **200**

*QueryDepositsResponse is the response type for the Query/Deposits RPC method.*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» deposits|[object]|false|none|none|
|»» proposalId|string(uint64)|false|none|none|
|»» depositor|string|false|none|none|
|»» amount|[object]|false|none|none|
|»»» denom|string|false|none|none|
|»»» amount|string|false|none|none|
|» pagination|object|false|none|pagination defines the pagination in the response.|
|»» nextKey|string(byte)|false|none|none|
|»» total|string(uint64)|false|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int32)|false|none|none|
|» message|string|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|any|false|none|none|
|»» @type|string|false|none|A URL/resource name that uniquely identifies the type of the serialized<br>protocol buffer message. This string must contain at least<br>one "/" character. The last segment of the URL's path must represent<br>the fully qualified name of the type (as in<br>`path/google.protobuf.Duration`). The name should be in a canonical form<br>(e.g., leading "." is not accepted).<br><br>In practice, teams usually precompile into the binary all types that they<br>expect it to use in the context of Any. However, for URLs which use the<br>scheme `http`, `https`, or no scheme, one can optionally set up a type<br>server that maps type URLs to message definitions as follows:<br><br>* If no scheme is provided, `https` is assumed.<br>* An HTTP GET on the URL must yield a [google.protobuf.Type][]<br>  value in binary format, or produce an error.<br>* Applications are allowed to cache lookup results based on the<br>  URL, or have them precompiled into a binary to avoid any<br>  lookup. Therefore, binary compatibility needs to be preserved<br>  on changes to types. (Use versioned type names to manage<br>  breaking changes.)<br><br>Note: this functionality is not currently available in the official<br>protobuf release, and it is not used for type URLs beginning with<br>type.googleapis.com.<br><br>Schemes other than `http`, `https` (or the empty scheme) might be<br>used with implementation specific semantics.|

<aside class="success">
This operation does not require authentication
</aside>

## CosmosGovV1Beta1Deposit

<a id="opIdCosmosGovV1Beta1Deposit"></a>

`GET /cosmos/gov/v1beta1/proposals/{proposalId}/deposits/{depositor}`

*Deposit queries single deposit information based proposalID, depositAddr.*

<h3 id="cosmosgovv1beta1deposit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|proposalId|path|string(uint64)|true|proposal_id defines the unique id of the proposal.|
|depositor|path|string|true|depositor defines the deposit addresses from the proposals.|

> Example responses

> 200 Response

<h3 id="cosmosgovv1beta1deposit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|Inline|
|default|Default|An unexpected error response.|Inline|

<h3 id="cosmosgovv1beta1deposit-responseschema">Response Schema</h3>

Status Code **200**

*QueryDepositResponse is the response type for the Query/Deposit RPC method.*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» deposit|object|false|none|Deposit defines an amount deposited by an account address to an active<br>proposal.|
|»» proposalId|string(uint64)|false|none|none|
|»» depositor|string|false|none|none|
|»» amount|[object]|false|none|none|
|»»» denom|string|false|none|none|
|»»» amount|string|false|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int32)|false|none|none|
|» message|string|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|any|false|none|none|
|»» @type|string|false|none|A URL/resource name that uniquely identifies the type of the serialized<br>protocol buffer message. This string must contain at least<br>one "/" character. The last segment of the URL's path must represent<br>the fully qualified name of the type (as in<br>`path/google.protobuf.Duration`). The name should be in a canonical form<br>(e.g., leading "." is not accepted).<br><br>In practice, teams usually precompile into the binary all types that they<br>expect it to use in the context of Any. However, for URLs which use the<br>scheme `http`, `https`, or no scheme, one can optionally set up a type<br>server that maps type URLs to message definitions as follows:<br><br>* If no scheme is provided, `https` is assumed.<br>* An HTTP GET on the URL must yield a [google.protobuf.Type][]<br>  value in binary format, or produce an error.<br>* Applications are allowed to cache lookup results based on the<br>  URL, or have them precompiled into a binary to avoid any<br>  lookup. Therefore, binary compatibility needs to be preserved<br>  on changes to types. (Use versioned type names to manage<br>  breaking changes.)<br><br>Note: this functionality is not currently available in the official<br>protobuf release, and it is not used for type URLs beginning with<br>type.googleapis.com.<br><br>Schemes other than `http`, `https` (or the empty scheme) might be<br>used with implementation specific semantics.|

<aside class="success">
This operation does not require authentication
</aside>

## CosmosGovV1Beta1TallyResult

<a id="opIdCosmosGovV1Beta1TallyResult"></a>

`GET /cosmos/gov/v1beta1/proposals/{proposalId}/tally`

*TallyResult queries the tally of a proposal vote.*

<h3 id="cosmosgovv1beta1tallyresult-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|proposalId|path|string(uint64)|true|proposal_id defines the unique id of the proposal.|

> Example responses

> 200 Response

<h3 id="cosmosgovv1beta1tallyresult-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|Inline|
|default|Default|An unexpected error response.|Inline|

<h3 id="cosmosgovv1beta1tallyresult-responseschema">Response Schema</h3>

Status Code **200**

*QueryTallyResultResponse is the response type for the Query/Tally RPC method.*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» tally|object|false|none|TallyResult defines a standard tally for a governance proposal.|
|»» yes|string|false|none|none|
|»» abstain|string|false|none|none|
|»» no|string|false|none|none|
|»» noWithVeto|string|false|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int32)|false|none|none|
|» message|string|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|any|false|none|none|
|»» @type|string|false|none|A URL/resource name that uniquely identifies the type of the serialized<br>protocol buffer message. This string must contain at least<br>one "/" character. The last segment of the URL's path must represent<br>the fully qualified name of the type (as in<br>`path/google.protobuf.Duration`). The name should be in a canonical form<br>(e.g., leading "." is not accepted).<br><br>In practice, teams usually precompile into the binary all types that they<br>expect it to use in the context of Any. However, for URLs which use the<br>scheme `http`, `https`, or no scheme, one can optionally set up a type<br>server that maps type URLs to message definitions as follows:<br><br>* If no scheme is provided, `https` is assumed.<br>* An HTTP GET on the URL must yield a [google.protobuf.Type][]<br>  value in binary format, or produce an error.<br>* Applications are allowed to cache lookup results based on the<br>  URL, or have them precompiled into a binary to avoid any<br>  lookup. Therefore, binary compatibility needs to be preserved<br>  on changes to types. (Use versioned type names to manage<br>  breaking changes.)<br><br>Note: this functionality is not currently available in the official<br>protobuf release, and it is not used for type URLs beginning with<br>type.googleapis.com.<br><br>Schemes other than `http`, `https` (or the empty scheme) might be<br>used with implementation specific semantics.|

<aside class="success">
This operation does not require authentication
</aside>

## CosmosGovV1Beta1Votes

<a id="opIdCosmosGovV1Beta1Votes"></a>

`GET /cosmos/gov/v1beta1/proposals/{proposalId}/votes`

*Votes queries votes of a given proposal.*

<h3 id="cosmosgovv1beta1votes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|proposalId|path|string(uint64)|true|proposal_id defines the unique id of the proposal.|
|pagination.key|query|string(byte)|false|key is a value returned in PageResponse.next_key to begin|
|pagination.offset|query|string(uint64)|false|offset is a numeric offset that can be used when key is unavailable.|
|pagination.limit|query|string(uint64)|false|limit is the total number of results to be returned in the result page.|
|pagination.countTotal|query|boolean|false|count_total is set to true  to indicate that the result set should include|
|pagination.reverse|query|boolean|false|reverse is set to true if results are to be returned in the descending order.|

#### Detailed descriptions

**pagination.key**: key is a value returned in PageResponse.next_key to begin
querying the next page most efficiently. Only one of offset or key
should be set.

**pagination.offset**: offset is a numeric offset that can be used when key is unavailable.
It is less efficient than using key. Only one of offset or key should
be set.

**pagination.limit**: limit is the total number of results to be returned in the result page.
If left empty it will default to a value to be set by each app.

**pagination.countTotal**: count_total is set to true  to indicate that the result set should include
a count of the total number of items available for pagination in UIs.
count_total is only respected when offset is used. It is ignored when key
is set.

**pagination.reverse**: reverse is set to true if results are to be returned in the descending order.

Since: cosmos-sdk 0.43

> Example responses

> 200 Response

<h3 id="cosmosgovv1beta1votes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|Inline|
|default|Default|An unexpected error response.|Inline|

<h3 id="cosmosgovv1beta1votes-responseschema">Response Schema</h3>

Status Code **200**

*QueryVotesResponse is the response type for the Query/Votes RPC method.*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» votes|[object]|false|none|votes defined the queried votes.|
|»» proposalId|string(uint64)|false|none|none|
|»» voter|string|false|none|none|
|»» option|string|false|none|Deprecated: Prefer to use `options` instead. This field is set in queries<br>if and only if `len(options) == 1` and that option has weight 1. In all<br>other cases, this field will default to VOTE_OPTION_UNSPECIFIED.|
|»» options|[object]|false|none|none|
|»»» option|string|false|none|VoteOption enumerates the valid vote options for a given governance proposal.<br><br> - VOTE_OPTION_UNSPECIFIED: VOTE_OPTION_UNSPECIFIED defines a no-op vote option.<br> - VOTE_OPTION_YES: VOTE_OPTION_YES defines a yes vote option.<br> - VOTE_OPTION_ABSTAIN: VOTE_OPTION_ABSTAIN defines an abstain vote option.<br> - VOTE_OPTION_NO: VOTE_OPTION_NO defines a no vote option.<br> - VOTE_OPTION_NO_WITH_VETO: VOTE_OPTION_NO_WITH_VETO defines a no with veto vote option.|
|»»» weight|string|false|none|none|
|» pagination|object|false|none|pagination defines the pagination in the response.|
|»» nextKey|string(byte)|false|none|none|
|»» total|string(uint64)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|option|VOTE_OPTION_UNSPECIFIED|
|option|VOTE_OPTION_YES|
|option|VOTE_OPTION_ABSTAIN|
|option|VOTE_OPTION_NO|
|option|VOTE_OPTION_NO_WITH_VETO|
|option|VOTE_OPTION_UNSPECIFIED|
|option|VOTE_OPTION_YES|
|option|VOTE_OPTION_ABSTAIN|
|option|VOTE_OPTION_NO|
|option|VOTE_OPTION_NO_WITH_VETO|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int32)|false|none|none|
|» message|string|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|any|false|none|none|
|»» @type|string|false|none|A URL/resource name that uniquely identifies the type of the serialized<br>protocol buffer message. This string must contain at least<br>one "/" character. The last segment of the URL's path must represent<br>the fully qualified name of the type (as in<br>`path/google.protobuf.Duration`). The name should be in a canonical form<br>(e.g., leading "." is not accepted).<br><br>In practice, teams usually precompile into the binary all types that they<br>expect it to use in the context of Any. However, for URLs which use the<br>scheme `http`, `https`, or no scheme, one can optionally set up a type<br>server that maps type URLs to message definitions as follows:<br><br>* If no scheme is provided, `https` is assumed.<br>* An HTTP GET on the URL must yield a [google.protobuf.Type][]<br>  value in binary format, or produce an error.<br>* Applications are allowed to cache lookup results based on the<br>  URL, or have them precompiled into a binary to avoid any<br>  lookup. Therefore, binary compatibility needs to be preserved<br>  on changes to types. (Use versioned type names to manage<br>  breaking changes.)<br><br>Note: this functionality is not currently available in the official<br>protobuf release, and it is not used for type URLs beginning with<br>type.googleapis.com.<br><br>Schemes other than `http`, `https` (or the empty scheme) might be<br>used with implementation specific semantics.|

<aside class="success">
This operation does not require authentication
</aside>

## CosmosGovV1Beta1Vote

<a id="opIdCosmosGovV1Beta1Vote"></a>

`GET /cosmos/gov/v1beta1/proposals/{proposalId}/votes/{voter}`

*Vote queries voted information based on proposalID, voterAddr.*

<h3 id="cosmosgovv1beta1vote-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|proposalId|path|string(uint64)|true|proposal_id defines the unique id of the proposal.|
|voter|path|string|true|voter defines the oter address for the proposals.|

> Example responses

> 200 Response

<h3 id="cosmosgovv1beta1vote-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|Inline|
|default|Default|An unexpected error response.|Inline|

<h3 id="cosmosgovv1beta1vote-responseschema">Response Schema</h3>

Status Code **200**

*QueryVoteResponse is the response type for the Query/Vote RPC method.*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» vote|object|false|none|Vote defines a vote on a governance proposal.<br>A Vote consists of a proposal ID, the voter, and the vote option.|
|»» proposalId|string(uint64)|false|none|none|
|»» voter|string|false|none|none|
|»» option|string|false|none|Deprecated: Prefer to use `options` instead. This field is set in queries<br>if and only if `len(options) == 1` and that option has weight 1. In all<br>other cases, this field will default to VOTE_OPTION_UNSPECIFIED.|
|»» options|[object]|false|none|none|
|»»» option|string|false|none|VoteOption enumerates the valid vote options for a given governance proposal.<br><br> - VOTE_OPTION_UNSPECIFIED: VOTE_OPTION_UNSPECIFIED defines a no-op vote option.<br> - VOTE_OPTION_YES: VOTE_OPTION_YES defines a yes vote option.<br> - VOTE_OPTION_ABSTAIN: VOTE_OPTION_ABSTAIN defines an abstain vote option.<br> - VOTE_OPTION_NO: VOTE_OPTION_NO defines a no vote option.<br> - VOTE_OPTION_NO_WITH_VETO: VOTE_OPTION_NO_WITH_VETO defines a no with veto vote option.|
|»»» weight|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|option|VOTE_OPTION_UNSPECIFIED|
|option|VOTE_OPTION_YES|
|option|VOTE_OPTION_ABSTAIN|
|option|VOTE_OPTION_NO|
|option|VOTE_OPTION_NO_WITH_VETO|
|option|VOTE_OPTION_UNSPECIFIED|
|option|VOTE_OPTION_YES|
|option|VOTE_OPTION_ABSTAIN|
|option|VOTE_OPTION_NO|
|option|VOTE_OPTION_NO_WITH_VETO|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int32)|false|none|none|
|» message|string|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|any|false|none|none|
|»» @type|string|false|none|A URL/resource name that uniquely identifies the type of the serialized<br>protocol buffer message. This string must contain at least<br>one "/" character. The last segment of the URL's path must represent<br>the fully qualified name of the type (as in<br>`path/google.protobuf.Duration`). The name should be in a canonical form<br>(e.g., leading "." is not accepted).<br><br>In practice, teams usually precompile into the binary all types that they<br>expect it to use in the context of Any. However, for URLs which use the<br>scheme `http`, `https`, or no scheme, one can optionally set up a type<br>server that maps type URLs to message definitions as follows:<br><br>* If no scheme is provided, `https` is assumed.<br>* An HTTP GET on the URL must yield a [google.protobuf.Type][]<br>  value in binary format, or produce an error.<br>* Applications are allowed to cache lookup results based on the<br>  URL, or have them precompiled into a binary to avoid any<br>  lookup. Therefore, binary compatibility needs to be preserved<br>  on changes to types. (Use versioned type names to manage<br>  breaking changes.)<br><br>Note: this functionality is not currently available in the official<br>protobuf release, and it is not used for type URLs beginning with<br>type.googleapis.com.<br><br>Schemes other than `http`, `https` (or the empty scheme) might be<br>used with implementation specific semantics.|

<aside class="success">
This operation does not require authentication
</aside>

## CosmosSlashingV1Beta1Params

<a id="opIdCosmosSlashingV1Beta1Params"></a>

`GET /cosmos/slashing/v1beta1/params`

*Params queries the parameters of slashing module*

> Example responses

> 200 Response

<h3 id="cosmosslashingv1beta1params-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|Inline|
|default|Default|An unexpected error response.|Inline|

<h3 id="cosmosslashingv1beta1params-responseschema">Response Schema</h3>

Status Code **200**

*QueryParamsResponse is the response type for the Query/Params RPC method*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» params|object|false|none|Params represents the parameters used for by the slashing module.|
|»» signedBlocksWindow|string(int64)|false|none|none|
|»» minSignedPerWindow|string(byte)|false|none|none|
|»» downtimeJailDuration|string|false|none|none|
|»» slashFractionDoubleSign|string(byte)|false|none|none|
|»» slashFractionDowntime|string(byte)|false|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int32)|false|none|none|
|» message|string|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|any|false|none|none|
|»» @type|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## CosmosSlashingV1Beta1SigningInfos

<a id="opIdCosmosSlashingV1Beta1SigningInfos"></a>

`GET /cosmos/slashing/v1beta1/signing_infos`

*SigningInfos queries signing info of all validators*

<h3 id="cosmosslashingv1beta1signinginfos-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pagination.key|query|string(byte)|false|key is a value returned in PageResponse.next_key to begin|
|pagination.offset|query|string(uint64)|false|offset is a numeric offset that can be used when key is unavailable.|
|pagination.limit|query|string(uint64)|false|limit is the total number of results to be returned in the result page.|
|pagination.countTotal|query|boolean|false|count_total is set to true  to indicate that the result set should include|
|pagination.reverse|query|boolean|false|reverse is set to true if results are to be returned in the descending order.|

#### Detailed descriptions

**pagination.key**: key is a value returned in PageResponse.next_key to begin
querying the next page most efficiently. Only one of offset or key
should be set.

**pagination.offset**: offset is a numeric offset that can be used when key is unavailable.
It is less efficient than using key. Only one of offset or key should
be set.

**pagination.limit**: limit is the total number of results to be returned in the result page.
If left empty it will default to a value to be set by each app.

**pagination.countTotal**: count_total is set to true  to indicate that the result set should include
a count of the total number of items available for pagination in UIs.
count_total is only respected when offset is used. It is ignored when key
is set.

**pagination.reverse**: reverse is set to true if results are to be returned in the descending order.

Since: cosmos-sdk 0.43

> Example responses

> 200 Response

<h3 id="cosmosslashingv1beta1signinginfos-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|Inline|
|default|Default|An unexpected error response.|Inline|

<h3 id="cosmosslashingv1beta1signinginfos-responseschema">Response Schema</h3>

Status Code **200**

*QuerySigningInfosResponse is the response type for the Query/SigningInfos RPC
method*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» info|[object]|false|none|none|
|»» address|string|false|none|none|
|»» startHeight|string(int64)|false|none|none|
|»» indexOffset|string(int64)|false|none|Index which is incremented each time the validator was a bonded<br>in a block and may have signed a precommit or not. This in conjunction with the<br>`SignedBlocksWindow` param determines the index in the `MissedBlocksBitArray`.|
|»» jailedUntil|string(date-time)|false|none|Timestamp until which the validator is jailed due to liveness downtime.|
|»» tombstoned|boolean|false|none|Whether or not a validator has been tombstoned (killed out of validator set). It is set<br>once the validator commits an equivocation or for any other configured misbehiavor.|
|»» missedBlocksCounter|string(int64)|false|none|A counter kept to avoid unnecessary array reads.<br>Note that `Sum(MissedBlocksBitArray)` always equals `MissedBlocksCounter`.|
|» pagination|object|false|none|PageResponse is to be embedded in gRPC response messages where the<br>corresponding request message has used PageRequest.<br><br> message SomeResponse {<br>         repeated Bar results = 1;<br>         PageResponse page = 2;<br> }|
|»» nextKey|string(byte)|false|none|none|
|»» total|string(uint64)|false|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int32)|false|none|none|
|» message|string|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|any|false|none|none|
|»» @type|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## CosmosSlashingV1Beta1SigningInfo

<a id="opIdCosmosSlashingV1Beta1SigningInfo"></a>

`GET /cosmos/slashing/v1beta1/signing_infos/{consAddress}`

*SigningInfo queries the signing info of given cons address*

<h3 id="cosmosslashingv1beta1signinginfo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|consAddress|path|string|true|cons_address is the address to query signing info of|

> Example responses

> 200 Response

<h3 id="cosmosslashingv1beta1signinginfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|Inline|
|default|Default|An unexpected error response.|Inline|

<h3 id="cosmosslashingv1beta1signinginfo-responseschema">Response Schema</h3>

Status Code **200**

*QuerySigningInfoResponse is the response type for the Query/SigningInfo RPC
method*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» valSigningInfo|object|false|none|ValidatorSigningInfo defines a validator's signing info for monitoring their<br>liveness activity.|
|»» address|string|false|none|none|
|»» startHeight|string(int64)|false|none|none|
|»» indexOffset|string(int64)|false|none|Index which is incremented each time the validator was a bonded<br>in a block and may have signed a precommit or not. This in conjunction with the<br>`SignedBlocksWindow` param determines the index in the `MissedBlocksBitArray`.|
|»» jailedUntil|string(date-time)|false|none|Timestamp until which the validator is jailed due to liveness downtime.|
|»» tombstoned|boolean|false|none|Whether or not a validator has been tombstoned (killed out of validator set). It is set<br>once the validator commits an equivocation or for any other configured misbehiavor.|
|»» missedBlocksCounter|string(int64)|false|none|A counter kept to avoid unnecessary array reads.<br>Note that `Sum(MissedBlocksBitArray)` always equals `MissedBlocksCounter`.|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int32)|false|none|none|
|» message|string|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|any|false|none|none|
|»» @type|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## CosmosStakingV1Beta1DelegatorDelegations

<a id="opIdCosmosStakingV1Beta1DelegatorDelegations"></a>

`GET /cosmos/staking/v1beta1/delegations/{delegatorAddr}`

*DelegatorDelegations queries all delegations of a given delegator address.*

<h3 id="cosmosstakingv1beta1delegatordelegations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|delegatorAddr|path|string|true|delegator_addr defines the delegator address to query for.|
|pagination.key|query|string(byte)|false|key is a value returned in PageResponse.next_key to begin|
|pagination.offset|query|string(uint64)|false|offset is a numeric offset that can be used when key is unavailable.|
|pagination.limit|query|string(uint64)|false|limit is the total number of results to be returned in the result page.|
|pagination.countTotal|query|boolean|false|count_total is set to true  to indicate that the result set should include|
|pagination.reverse|query|boolean|false|reverse is set to true if results are to be returned in the descending order.|

#### Detailed descriptions

**pagination.key**: key is a value returned in PageResponse.next_key to begin
querying the next page most efficiently. Only one of offset or key
should be set.

**pagination.offset**: offset is a numeric offset that can be used when key is unavailable.
It is less efficient than using key. Only one of offset or key should
be set.

**pagination.limit**: limit is the total number of results to be returned in the result page.
If left empty it will default to a value to be set by each app.

**pagination.countTotal**: count_total is set to true  to indicate that the result set should include
a count of the total number of items available for pagination in UIs.
count_total is only respected when offset is used. It is ignored when key
is set.

**pagination.reverse**: reverse is set to true if results are to be returned in the descending order.

Since: cosmos-sdk 0.43

> Example responses

> 200 Response

<h3 id="cosmosstakingv1beta1delegatordelegations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|Inline|
|default|Default|An unexpected error response.|Inline|

<h3 id="cosmosstakingv1beta1delegatordelegations-responseschema">Response Schema</h3>

Status Code **200**

*QueryDelegatorDelegationsResponse is response type for the
Query/DelegatorDelegations RPC method.*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» delegationResponses|[object]|false|none|delegation_responses defines all the delegations' info of a delegator.|
|»» delegation|object|false|none|Delegation represents the bond with tokens held by an account. It is<br>owned by one delegator, and is associated with the voting power of one<br>validator.|
|»»» delegatorAddress|string|false|none|delegator_address is the bech32-encoded address of the delegator.|
|»»» validatorAddress|string|false|none|validator_address is the bech32-encoded address of the validator.|
|»»» shares|string|false|none|shares define the delegation shares received.|
|»» balance|object|false|none|Coin defines a token with a denomination and an amount.<br><br>NOTE: The amount field is an Int which implements the custom method<br>signatures required by gogoproto.|
|»»» denom|string|false|none|none|
|»»» amount|string|false|none|none|
|» pagination|object|false|none|pagination defines the pagination in the response.|
|»» nextKey|string(byte)|false|none|none|
|»» total|string(uint64)|false|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int32)|false|none|none|
|» message|string|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|any|false|none|none|
|»» @type|string|false|none|A URL/resource name that uniquely identifies the type of the serialized<br>protocol buffer message. This string must contain at least<br>one "/" character. The last segment of the URL's path must represent<br>the fully qualified name of the type (as in<br>`path/google.protobuf.Duration`). The name should be in a canonical form<br>(e.g., leading "." is not accepted).<br><br>In practice, teams usually precompile into the binary all types that they<br>expect it to use in the context of Any. However, for URLs which use the<br>scheme `http`, `https`, or no scheme, one can optionally set up a type<br>server that maps type URLs to message definitions as follows:<br><br>* If no scheme is provided, `https` is assumed.<br>* An HTTP GET on the URL must yield a [google.protobuf.Type][]<br>  value in binary format, or produce an error.<br>* Applications are allowed to cache lookup results based on the<br>  URL, or have them precompiled into a binary to avoid any<br>  lookup. Therefore, binary compatibility needs to be preserved<br>  on changes to types. (Use versioned type names to manage<br>  breaking changes.)<br><br>Note: this functionality is not currently available in the official<br>protobuf release, and it is not used for type URLs beginning with<br>type.googleapis.com.<br><br>Schemes other than `http`, `https` (or the empty scheme) might be<br>used with implementation specific semantics.|

<aside class="success">
This operation does not require authentication
</aside>

## CosmosStakingV1Beta1Redelegations

<a id="opIdCosmosStakingV1Beta1Redelegations"></a>

`GET /cosmos/staking/v1beta1/delegators/{delegatorAddr}/redelegations`

*Redelegations queries redelegations of given address.*

<h3 id="cosmosstakingv1beta1redelegations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|delegatorAddr|path|string|true|delegator_addr defines the delegator address to query for.|
|srcValidatorAddr|query|string|false|src_validator_addr defines the validator address to redelegate from.|
|dstValidatorAddr|query|string|false|dst_validator_addr defines the validator address to redelegate to.|
|pagination.key|query|string(byte)|false|key is a value returned in PageResponse.next_key to begin|
|pagination.offset|query|string(uint64)|false|offset is a numeric offset that can be used when key is unavailable.|
|pagination.limit|query|string(uint64)|false|limit is the total number of results to be returned in the result page.|
|pagination.countTotal|query|boolean|false|count_total is set to true  to indicate that the result set should include|
|pagination.reverse|query|boolean|false|reverse is set to true if results are to be returned in the descending order.|

#### Detailed descriptions

**pagination.key**: key is a value returned in PageResponse.next_key to begin
querying the next page most efficiently. Only one of offset or key
should be set.

**pagination.offset**: offset is a numeric offset that can be used when key is unavailable.
It is less efficient than using key. Only one of offset or key should
be set.

**pagination.limit**: limit is the total number of results to be returned in the result page.
If left empty it will default to a value to be set by each app.

**pagination.countTotal**: count_total is set to true  to indicate that the result set should include
a count of the total number of items available for pagination in UIs.
count_total is only respected when offset is used. It is ignored when key
is set.

**pagination.reverse**: reverse is set to true if results are to be returned in the descending order.

Since: cosmos-sdk 0.43

> Example responses

> 200 Response

<h3 id="cosmosstakingv1beta1redelegations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|Inline|
|default|Default|An unexpected error response.|Inline|

<h3 id="cosmosstakingv1beta1redelegations-responseschema">Response Schema</h3>

Status Code **200**

*QueryRedelegationsResponse is response type for the Query/Redelegations RPC
method.*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» redelegationResponses|[object]|false|none|none|
|»» redelegation|object|false|none|Redelegation contains the list of a particular delegator's redelegating bonds<br>from a particular source validator to a particular destination validator.|
|»»» delegatorAddress|string|false|none|delegator_address is the bech32-encoded address of the delegator.|
|»»» validatorSrcAddress|string|false|none|validator_src_address is the validator redelegation source operator address.|
|»»» validatorDstAddress|string|false|none|validator_dst_address is the validator redelegation destination operator address.|
|»»» entries|[object]|false|none|entries are the redelegation entries.|
|»»»» creationHeight|string(int64)|false|none|creation_height  defines the height which the redelegation took place.|
|»»»» completionTime|string(date-time)|false|none|completion_time defines the unix time for redelegation completion.|
|»»»» initialBalance|string|false|none|initial_balance defines the initial balance when redelegation started.|
|»»»» sharesDst|string|false|none|shares_dst is the amount of destination-validator shares created by redelegation.|
|»» entries|[object]|false|none|none|
|»»» redelegationEntry|object|false|none|RedelegationEntry defines a redelegation object with relevant metadata.|
|»»»» creationHeight|string(int64)|false|none|creation_height  defines the height which the redelegation took place.|
|»»»» completionTime|string(date-time)|false|none|completion_time defines the unix time for redelegation completion.|
|»»»» initialBalance|string|false|none|initial_balance defines the initial balance when redelegation started.|
|»»»» sharesDst|string|false|none|shares_dst is the amount of destination-validator shares created by redelegation.|
|»»» balance|string|false|none|none|
|» pagination|object|false|none|pagination defines the pagination in the response.|
|»» nextKey|string(byte)|false|none|none|
|»» total|string(uint64)|false|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int32)|false|none|none|
|» message|string|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|any|false|none|none|
|»» @type|string|false|none|A URL/resource name that uniquely identifies the type of the serialized<br>protocol buffer message. This string must contain at least<br>one "/" character. The last segment of the URL's path must represent<br>the fully qualified name of the type (as in<br>`path/google.protobuf.Duration`). The name should be in a canonical form<br>(e.g., leading "." is not accepted).<br><br>In practice, teams usually precompile into the binary all types that they<br>expect it to use in the context of Any. However, for URLs which use the<br>scheme `http`, `https`, or no scheme, one can optionally set up a type<br>server that maps type URLs to message definitions as follows:<br><br>* If no scheme is provided, `https` is assumed.<br>* An HTTP GET on the URL must yield a [google.protobuf.Type][]<br>  value in binary format, or produce an error.<br>* Applications are allowed to cache lookup results based on the<br>  URL, or have them precompiled into a binary to avoid any<br>  lookup. Therefore, binary compatibility needs to be preserved<br>  on changes to types. (Use versioned type names to manage<br>  breaking changes.)<br><br>Note: this functionality is not currently available in the official<br>protobuf release, and it is not used for type URLs beginning with<br>type.googleapis.com.<br><br>Schemes other than `http`, `https` (or the empty scheme) might be<br>used with implementation specific semantics.|

<aside class="success">
This operation does not require authentication
</aside>

## CosmosStakingV1Beta1DelegatorUnbondingDelegations

<a id="opIdCosmosStakingV1Beta1DelegatorUnbondingDelegations"></a>

`GET /cosmos/staking/v1beta1/delegators/{delegatorAddr}/unbonding_delegations`

*DelegatorUnbondingDelegations queries all unbonding delegations of a given
delegator address.*

<h3 id="cosmosstakingv1beta1delegatorunbondingdelegations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|delegatorAddr|path|string|true|delegator_addr defines the delegator address to query for.|
|pagination.key|query|string(byte)|false|key is a value returned in PageResponse.next_key to begin|
|pagination.offset|query|string(uint64)|false|offset is a numeric offset that can be used when key is unavailable.|
|pagination.limit|query|string(uint64)|false|limit is the total number of results to be returned in the result page.|
|pagination.countTotal|query|boolean|false|count_total is set to true  to indicate that the result set should include|
|pagination.reverse|query|boolean|false|reverse is set to true if results are to be returned in the descending order.|

#### Detailed descriptions

**pagination.key**: key is a value returned in PageResponse.next_key to begin
querying the next page most efficiently. Only one of offset or key
should be set.

**pagination.offset**: offset is a numeric offset that can be used when key is unavailable.
It is less efficient than using key. Only one of offset or key should
be set.

**pagination.limit**: limit is the total number of results to be returned in the result page.
If left empty it will default to a value to be set by each app.

**pagination.countTotal**: count_total is set to true  to indicate that the result set should include
a count of the total number of items available for pagination in UIs.
count_total is only respected when offset is used. It is ignored when key
is set.

**pagination.reverse**: reverse is set to true if results are to be returned in the descending order.

Since: cosmos-sdk 0.43

> Example responses

> 200 Response

<h3 id="cosmosstakingv1beta1delegatorunbondingdelegations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|Inline|
|default|Default|An unexpected error response.|Inline|

<h3 id="cosmosstakingv1beta1delegatorunbondingdelegations-responseschema">Response Schema</h3>

Status Code **200**

*QueryUnbondingDelegatorDelegationsResponse is response type for the
Query/UnbondingDelegatorDelegations RPC method.*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» unbondingResponses|[object]|false|none|none|
|»» delegatorAddress|string|false|none|delegator_address is the bech32-encoded address of the delegator.|
|»» validatorAddress|string|false|none|validator_address is the bech32-encoded address of the validator.|
|»» entries|[object]|false|none|entries are the unbonding delegation entries.|
|»»» creationHeight|string(int64)|false|none|creation_height is the height which the unbonding took place.|
|»»» completionTime|string(date-time)|false|none|completion_time is the unix time for unbonding completion.|
|»»» initialBalance|string|false|none|initial_balance defines the tokens initially scheduled to receive at completion.|
|»»» balance|string|false|none|balance defines the tokens to receive at completion.|
|» pagination|object|false|none|pagination defines the pagination in the response.|
|»» nextKey|string(byte)|false|none|none|
|»» total|string(uint64)|false|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int32)|false|none|none|
|» message|string|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|any|false|none|none|
|»» @type|string|false|none|A URL/resource name that uniquely identifies the type of the serialized<br>protocol buffer message. This string must contain at least<br>one "/" character. The last segment of the URL's path must represent<br>the fully qualified name of the type (as in<br>`path/google.protobuf.Duration`). The name should be in a canonical form<br>(e.g., leading "." is not accepted).<br><br>In practice, teams usually precompile into the binary all types that they<br>expect it to use in the context of Any. However, for URLs which use the<br>scheme `http`, `https`, or no scheme, one can optionally set up a type<br>server that maps type URLs to message definitions as follows:<br><br>* If no scheme is provided, `https` is assumed.<br>* An HTTP GET on the URL must yield a [google.protobuf.Type][]<br>  value in binary format, or produce an error.<br>* Applications are allowed to cache lookup results based on the<br>  URL, or have them precompiled into a binary to avoid any<br>  lookup. Therefore, binary compatibility needs to be preserved<br>  on changes to types. (Use versioned type names to manage<br>  breaking changes.)<br><br>Note: this functionality is not currently available in the official<br>protobuf release, and it is not used for type URLs beginning with<br>type.googleapis.com.<br><br>Schemes other than `http`, `https` (or the empty scheme) might be<br>used with implementation specific semantics.|

<aside class="success">
This operation does not require authentication
</aside>

## CosmosStakingV1Beta1DelegatorValidators

<a id="opIdCosmosStakingV1Beta1DelegatorValidators"></a>

`GET /cosmos/staking/v1beta1/delegators/{delegatorAddr}/validators`

*DelegatorValidators queries all validators info for given delegator
address.*

<h3 id="cosmosstakingv1beta1delegatorvalidators-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|delegatorAddr|path|string|true|delegator_addr defines the delegator address to query for.|
|pagination.key|query|string(byte)|false|key is a value returned in PageResponse.next_key to begin|
|pagination.offset|query|string(uint64)|false|offset is a numeric offset that can be used when key is unavailable.|
|pagination.limit|query|string(uint64)|false|limit is the total number of results to be returned in the result page.|
|pagination.countTotal|query|boolean|false|count_total is set to true  to indicate that the result set should include|
|pagination.reverse|query|boolean|false|reverse is set to true if results are to be returned in the descending order.|

#### Detailed descriptions

**pagination.key**: key is a value returned in PageResponse.next_key to begin
querying the next page most efficiently. Only one of offset or key
should be set.

**pagination.offset**: offset is a numeric offset that can be used when key is unavailable.
It is less efficient than using key. Only one of offset or key should
be set.

**pagination.limit**: limit is the total number of results to be returned in the result page.
If left empty it will default to a value to be set by each app.

**pagination.countTotal**: count_total is set to true  to indicate that the result set should include
a count of the total number of items available for pagination in UIs.
count_total is only respected when offset is used. It is ignored when key
is set.

**pagination.reverse**: reverse is set to true if results are to be returned in the descending order.

Since: cosmos-sdk 0.43

> Example responses

> 200 Response

<h3 id="cosmosstakingv1beta1delegatorvalidators-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|Inline|
|default|Default|An unexpected error response.|Inline|

<h3 id="cosmosstakingv1beta1delegatorvalidators-responseschema">Response Schema</h3>

Status Code **200**

*QueryDelegatorValidatorsResponse is response type for the
Query/DelegatorValidators RPC method.*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» validators|[object]|false|none|validators defines the the validators' info of a delegator.|
|»» operatorAddress|string|false|none|operator_address defines the address of the validator's operator; bech encoded in JSON.|
|»» consensusPubkey|object|false|none|`Any` contains an arbitrary serialized protocol buffer message along with a<br>URL that describes the type of the serialized message.<br><br>Protobuf library provides support to pack/unpack Any values in the form<br>of utility functions or additional generated methods of the Any type.<br><br>Example 1: Pack and unpack a message in C++.<br><br>    Foo foo = ...;<br>    Any any;<br>    any.PackFrom(foo);<br>    ...<br>    if (any.UnpackTo(&foo)) {<br>      ...<br>    }<br><br>Example 2: Pack and unpack a message in Java.<br><br>    Foo foo = ...;<br>    Any any = Any.pack(foo);<br>    ...<br>    if (any.is(Foo.class)) {<br>      foo = any.unpack(Foo.class);<br>    }<br><br> Example 3: Pack and unpack a message in Python.<br><br>    foo = Foo(...)<br>    any = Any()<br>    any.Pack(foo)<br>    ...<br>    if any.Is(Foo.DESCRIPTOR):<br>      any.Unpack(foo)<br>      ...<br><br> Example 4: Pack and unpack a message in Go<br><br>     foo := &pb.Foo{...}<br>     any, err := anypb.New(foo)<br>     if err != nil {<br>       ...<br>     }<br>     ...<br>     foo := &pb.Foo{}<br>     if err := any.UnmarshalTo(foo); err != nil {<br>       ...<br>     }<br><br>The pack methods provided by protobuf library will by default use<br>'type.googleapis.com/full.type.name' as the type URL and the unpack<br>methods only use the fully qualified type name after the last '/'<br>in the type URL, for example "foo.bar.com/x/y.z" will yield type<br>name "y.z".<br><br><br>JSON<br>====<br>The JSON representation of an `Any` value uses the regular<br>representation of the deserialized, embedded message, with an<br>additional field `@type` which contains the type URL. Example:<br><br>    package google.profile;<br>    message Person {<br>      string first_name = 1;<br>      string last_name = 2;<br>    }<br><br>    {<br>      "@type": "type.googleapis.com/google.profile.Person",<br>      "firstName": <string>,<br>      "lastName": <string><br>    }<br><br>If the embedded message type is well-known and has a custom JSON<br>representation, that representation will be embedded adding a field<br>`value` which holds the custom JSON in addition to the `@type`<br>field. Example (for message [google.protobuf.Duration][]):<br><br>    {<br>      "@type": "type.googleapis.com/google.protobuf.Duration",<br>      "value": "1.212s"<br>    }|
|»»» **additionalProperties**|any|false|none|none|
|»»» @type|string|false|none|A URL/resource name that uniquely identifies the type of the serialized<br>protocol buffer message. This string must contain at least<br>one "/" character. The last segment of the URL's path must represent<br>the fully qualified name of the type (as in<br>`path/google.protobuf.Duration`). The name should be in a canonical form<br>(e.g., leading "." is not accepted).<br><br>In practice, teams usually precompile into the binary all types that they<br>expect it to use in the context of Any. However, for URLs which use the<br>scheme `http`, `https`, or no scheme, one can optionally set up a type<br>server that maps type URLs to message definitions as follows:<br><br>* If no scheme is provided, `https` is assumed.<br>* An HTTP GET on the URL must yield a [google.protobuf.Type][]<br>  value in binary format, or produce an error.<br>* Applications are allowed to cache lookup results based on the<br>  URL, or have them precompiled into a binary to avoid any<br>  lookup. Therefore, binary compatibility needs to be preserved<br>  on changes to types. (Use versioned type names to manage<br>  breaking changes.)<br><br>Note: this functionality is not currently available in the official<br>protobuf release, and it is not used for type URLs beginning with<br>type.googleapis.com.<br><br>Schemes other than `http`, `https` (or the empty scheme) might be<br>used with implementation specific semantics.|
|»» jailed|boolean|false|none|jailed defined whether the validator has been jailed from bonded status or not.|
|»» status|string|false|none|status is the validator status (bonded/unbonding/unbonded).|
|»» tokens|string|false|none|tokens define the delegated tokens (incl. self-delegation).|
|»» delegatorShares|string|false|none|delegator_shares defines total shares issued to a validator's delegators.|
|»» description|object|false|none|description defines the description terms for the validator.|
|»»» moniker|string|false|none|moniker defines a human-readable name for the validator.|
|»»» identity|string|false|none|identity defines an optional identity signature (ex. UPort or Keybase).|
|»»» website|string|false|none|website defines an optional website link.|
|»»» securityContact|string|false|none|security_contact defines an optional email for security contact.|
|»»» details|string|false|none|details define other optional details.|
|»» unbondingHeight|string(int64)|false|none|unbonding_height defines, if unbonding, the height at which this validator has begun unbonding.|
|»» unbondingTime|string(date-time)|false|none|unbonding_time defines, if unbonding, the min time for the validator to complete unbonding.|
|»» commission|object|false|none|commission defines the commission parameters.|
|»»» commissionRates|object|false|none|commission_rates defines the initial commission rates to be used for creating a validator.|
|»»»» rate|string|false|none|rate is the commission rate charged to delegators, as a fraction.|
|»»»» maxRate|string|false|none|max_rate defines the maximum commission rate which validator can ever charge, as a fraction.|
|»»»» maxChangeRate|string|false|none|max_change_rate defines the maximum daily increase of the validator commission, as a fraction.|
|»»» updateTime|string(date-time)|false|none|update_time is the last time the commission rate was changed.|
|»» minSelfDelegation|string|false|none|min_self_delegation is the validator's self declared minimum self delegation.|
|» pagination|object|false|none|pagination defines the pagination in the response.|
|»» nextKey|string(byte)|false|none|none|
|»» total|string(uint64)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|BOND_STATUS_UNSPECIFIED|
|status|BOND_STATUS_UNBONDED|
|status|BOND_STATUS_UNBONDING|
|status|BOND_STATUS_BONDED|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int32)|false|none|none|
|» message|string|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|any|false|none|none|
|»» @type|string|false|none|A URL/resource name that uniquely identifies the type of the serialized<br>protocol buffer message. This string must contain at least<br>one "/" character. The last segment of the URL's path must represent<br>the fully qualified name of the type (as in<br>`path/google.protobuf.Duration`). The name should be in a canonical form<br>(e.g., leading "." is not accepted).<br><br>In practice, teams usually precompile into the binary all types that they<br>expect it to use in the context of Any. However, for URLs which use the<br>scheme `http`, `https`, or no scheme, one can optionally set up a type<br>server that maps type URLs to message definitions as follows:<br><br>* If no scheme is provided, `https` is assumed.<br>* An HTTP GET on the URL must yield a [google.protobuf.Type][]<br>  value in binary format, or produce an error.<br>* Applications are allowed to cache lookup results based on the<br>  URL, or have them precompiled into a binary to avoid any<br>  lookup. Therefore, binary compatibility needs to be preserved<br>  on changes to types. (Use versioned type names to manage<br>  breaking changes.)<br><br>Note: this functionality is not currently available in the official<br>protobuf release, and it is not used for type URLs beginning with<br>type.googleapis.com.<br><br>Schemes other than `http`, `https` (or the empty scheme) might be<br>used with implementation specific semantics.|

<aside class="success">
This operation does not require authentication
</aside>

## CosmosStakingV1Beta1DelegatorValidator

<a id="opIdCosmosStakingV1Beta1DelegatorValidator"></a>

`GET /cosmos/staking/v1beta1/delegators/{delegatorAddr}/validators/{validatorAddr}`

*DelegatorValidator queries validator info for given delegator validator
pair.*

<h3 id="cosmosstakingv1beta1delegatorvalidator-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|delegatorAddr|path|string|true|delegator_addr defines the delegator address to query for.|
|validatorAddr|path|string|true|validator_addr defines the validator address to query for.|

> Example responses

> 200 Response

<h3 id="cosmosstakingv1beta1delegatorvalidator-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|Inline|
|default|Default|An unexpected error response.|Inline|

<h3 id="cosmosstakingv1beta1delegatorvalidator-responseschema">Response Schema</h3>

Status Code **200**

*QueryDelegatorValidatorResponse response type for the
Query/DelegatorValidator RPC method.*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» validator|object|false|none|Validator defines a validator, together with the total amount of the<br>Validator's bond shares and their exchange rate to coins. Slashing results in<br>a decrease in the exchange rate, allowing correct calculation of future<br>undelegations without iterating over delegators. When coins are delegated to<br>this validator, the validator is credited with a delegation whose number of<br>bond shares is based on the amount of coins delegated divided by the current<br>exchange rate. Voting power can be calculated as total bonded shares<br>multiplied by exchange rate.|
|»» operatorAddress|string|false|none|operator_address defines the address of the validator's operator; bech encoded in JSON.|
|»» consensusPubkey|object|false|none|`Any` contains an arbitrary serialized protocol buffer message along with a<br>URL that describes the type of the serialized message.<br><br>Protobuf library provides support to pack/unpack Any values in the form<br>of utility functions or additional generated methods of the Any type.<br><br>Example 1: Pack and unpack a message in C++.<br><br>    Foo foo = ...;<br>    Any any;<br>    any.PackFrom(foo);<br>    ...<br>    if (any.UnpackTo(&foo)) {<br>      ...<br>    }<br><br>Example 2: Pack and unpack a message in Java.<br><br>    Foo foo = ...;<br>    Any any = Any.pack(foo);<br>    ...<br>    if (any.is(Foo.class)) {<br>      foo = any.unpack(Foo.class);<br>    }<br><br> Example 3: Pack and unpack a message in Python.<br><br>    foo = Foo(...)<br>    any = Any()<br>    any.Pack(foo)<br>    ...<br>    if any.Is(Foo.DESCRIPTOR):<br>      any.Unpack(foo)<br>      ...<br><br> Example 4: Pack and unpack a message in Go<br><br>     foo := &pb.Foo{...}<br>     any, err := anypb.New(foo)<br>     if err != nil {<br>       ...<br>     }<br>     ...<br>     foo := &pb.Foo{}<br>     if err := any.UnmarshalTo(foo); err != nil {<br>       ...<br>     }<br><br>The pack methods provided by protobuf library will by default use<br>'type.googleapis.com/full.type.name' as the type URL and the unpack<br>methods only use the fully qualified type name after the last '/'<br>in the type URL, for example "foo.bar.com/x/y.z" will yield type<br>name "y.z".<br><br><br>JSON<br>====<br>The JSON representation of an `Any` value uses the regular<br>representation of the deserialized, embedded message, with an<br>additional field `@type` which contains the type URL. Example:<br><br>    package google.profile;<br>    message Person {<br>      string first_name = 1;<br>      string last_name = 2;<br>    }<br><br>    {<br>      "@type": "type.googleapis.com/google.profile.Person",<br>      "firstName": <string>,<br>      "lastName": <string><br>    }<br><br>If the embedded message type is well-known and has a custom JSON<br>representation, that representation will be embedded adding a field<br>`value` which holds the custom JSON in addition to the `@type`<br>field. Example (for message [google.protobuf.Duration][]):<br><br>    {<br>      "@type": "type.googleapis.com/google.protobuf.Duration",<br>      "value": "1.212s"<br>    }|
|»»» **additionalProperties**|any|false|none|none|
|»»» @type|string|false|none|A URL/resource name that uniquely identifies the type of the serialized<br>protocol buffer message. This string must contain at least<br>one "/" character. The last segment of the URL's path must represent<br>the fully qualified name of the type (as in<br>`path/google.protobuf.Duration`). The name should be in a canonical form<br>(e.g., leading "." is not accepted).<br><br>In practice, teams usually precompile into the binary all types that they<br>expect it to use in the context of Any. However, for URLs which use the<br>scheme `http`, `https`, or no scheme, one can optionally set up a type<br>server that maps type URLs to message definitions as follows:<br><br>* If no scheme is provided, `https` is assumed.<br>* An HTTP GET on the URL must yield a [google.protobuf.Type][]<br>  value in binary format, or produce an error.<br>* Applications are allowed to cache lookup results based on the<br>  URL, or have them precompiled into a binary to avoid any<br>  lookup. Therefore, binary compatibility needs to be preserved<br>  on changes to types. (Use versioned type names to manage<br>  breaking changes.)<br><br>Note: this functionality is not currently available in the official<br>protobuf release, and it is not used for type URLs beginning with<br>type.googleapis.com.<br><br>Schemes other than `http`, `https` (or the empty scheme) might be<br>used with implementation specific semantics.|
|»» jailed|boolean|false|none|jailed defined whether the validator has been jailed from bonded status or not.|
|»» status|string|false|none|status is the validator status (bonded/unbonding/unbonded).|
|»» tokens|string|false|none|tokens define the delegated tokens (incl. self-delegation).|
|»» delegatorShares|string|false|none|delegator_shares defines total shares issued to a validator's delegators.|
|»» description|object|false|none|description defines the description terms for the validator.|
|»»» moniker|string|false|none|moniker defines a human-readable name for the validator.|
|»»» identity|string|false|none|identity defines an optional identity signature (ex. UPort or Keybase).|
|»»» website|string|false|none|website defines an optional website link.|
|»»» securityContact|string|false|none|security_contact defines an optional email for security contact.|
|»»» details|string|false|none|details define other optional details.|
|»» unbondingHeight|string(int64)|false|none|unbonding_height defines, if unbonding, the height at which this validator has begun unbonding.|
|»» unbondingTime|string(date-time)|false|none|unbonding_time defines, if unbonding, the min time for the validator to complete unbonding.|
|»» commission|object|false|none|commission defines the commission parameters.|
|»»» commissionRates|object|false|none|commission_rates defines the initial commission rates to be used for creating a validator.|
|»»»» rate|string|false|none|rate is the commission rate charged to delegators, as a fraction.|
|»»»» maxRate|string|false|none|max_rate defines the maximum commission rate which validator can ever charge, as a fraction.|
|»»»» maxChangeRate|string|false|none|max_change_rate defines the maximum daily increase of the validator commission, as a fraction.|
|»»» updateTime|string(date-time)|false|none|update_time is the last time the commission rate was changed.|
|»» minSelfDelegation|string|false|none|min_self_delegation is the validator's self declared minimum self delegation.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|BOND_STATUS_UNSPECIFIED|
|status|BOND_STATUS_UNBONDED|
|status|BOND_STATUS_UNBONDING|
|status|BOND_STATUS_BONDED|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int32)|false|none|none|
|» message|string|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|any|false|none|none|
|»» @type|string|false|none|A URL/resource name that uniquely identifies the type of the serialized<br>protocol buffer message. This string must contain at least<br>one "/" character. The last segment of the URL's path must represent<br>the fully qualified name of the type (as in<br>`path/google.protobuf.Duration`). The name should be in a canonical form<br>(e.g., leading "." is not accepted).<br><br>In practice, teams usually precompile into the binary all types that they<br>expect it to use in the context of Any. However, for URLs which use the<br>scheme `http`, `https`, or no scheme, one can optionally set up a type<br>server that maps type URLs to message definitions as follows:<br><br>* If no scheme is provided, `https` is assumed.<br>* An HTTP GET on the URL must yield a [google.protobuf.Type][]<br>  value in binary format, or produce an error.<br>* Applications are allowed to cache lookup results based on the<br>  URL, or have them precompiled into a binary to avoid any<br>  lookup. Therefore, binary compatibility needs to be preserved<br>  on changes to types. (Use versioned type names to manage<br>  breaking changes.)<br><br>Note: this functionality is not currently available in the official<br>protobuf release, and it is not used for type URLs beginning with<br>type.googleapis.com.<br><br>Schemes other than `http`, `https` (or the empty scheme) might be<br>used with implementation specific semantics.|

<aside class="success">
This operation does not require authentication
</aside>

## CosmosStakingV1Beta1HistoricalInfo

<a id="opIdCosmosStakingV1Beta1HistoricalInfo"></a>

`GET /cosmos/staking/v1beta1/historical_info/{height}`

*HistoricalInfo queries the historical info for given height.*

<h3 id="cosmosstakingv1beta1historicalinfo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|height|path|string(int64)|true|height defines at which height to query the historical info.|

> Example responses

> 200 Response

<h3 id="cosmosstakingv1beta1historicalinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|Inline|
|default|Default|An unexpected error response.|Inline|

<h3 id="cosmosstakingv1beta1historicalinfo-responseschema">Response Schema</h3>

Status Code **200**

*QueryHistoricalInfoResponse is response type for the Query/HistoricalInfo RPC
method.*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» hist|object|false|none|hist defines the historical info at the given height.|
|»» header|object|false|none|Header defines the structure of a Tendermint block header.|
|»»» version|object|false|none|Consensus captures the consensus rules for processing a block in the blockchain,<br>including all blockchain data structures and the rules of the application's<br>state transition machine.|
|»»»» block|string(uint64)|false|none|none|
|»»»» app|string(uint64)|false|none|none|
|»»» chainId|string|false|none|none|
|»»» height|string(int64)|false|none|none|
|»»» time|string(date-time)|false|none|none|
|»»» lastBlockId|object|false|none|none|
|»»»» hash|string(byte)|false|none|none|
|»»»» partSetHeader|object|false|none|none|
|»»»»» total|integer(int64)|false|none|none|
|»»»»» hash|string(byte)|false|none|none|
|»»» lastCommitHash|string(byte)|false|none|none|
|»»» dataHash|string(byte)|false|none|none|
|»»» validatorsHash|string(byte)|false|none|none|
|»»» nextValidatorsHash|string(byte)|false|none|none|
|»»» consensusHash|string(byte)|false|none|none|
|»»» appHash|string(byte)|false|none|none|
|»»» lastResultsHash|string(byte)|false|none|none|
|»»» evidenceHash|string(byte)|false|none|none|
|»»» proposerAddress|string(byte)|false|none|none|
|»» valset|[object]|false|none|none|
|»»» operatorAddress|string|false|none|operator_address defines the address of the validator's operator; bech encoded in JSON.|
|»»» consensusPubkey|object|false|none|`Any` contains an arbitrary serialized protocol buffer message along with a<br>URL that describes the type of the serialized message.<br><br>Protobuf library provides support to pack/unpack Any values in the form<br>of utility functions or additional generated methods of the Any type.<br><br>Example 1: Pack and unpack a message in C++.<br><br>    Foo foo = ...;<br>    Any any;<br>    any.PackFrom(foo);<br>    ...<br>    if (any.UnpackTo(&foo)) {<br>      ...<br>    }<br><br>Example 2: Pack and unpack a message in Java.<br><br>    Foo foo = ...;<br>    Any any = Any.pack(foo);<br>    ...<br>    if (any.is(Foo.class)) {<br>      foo = any.unpack(Foo.class);<br>    }<br><br> Example 3: Pack and unpack a message in Python.<br><br>    foo = Foo(...)<br>    any = Any()<br>    any.Pack(foo)<br>    ...<br>    if any.Is(Foo.DESCRIPTOR):<br>      any.Unpack(foo)<br>      ...<br><br> Example 4: Pack and unpack a message in Go<br><br>     foo := &pb.Foo{...}<br>     any, err := anypb.New(foo)<br>     if err != nil {<br>       ...<br>     }<br>     ...<br>     foo := &pb.Foo{}<br>     if err := any.UnmarshalTo(foo); err != nil {<br>       ...<br>     }<br><br>The pack methods provided by protobuf library will by default use<br>'type.googleapis.com/full.type.name' as the type URL and the unpack<br>methods only use the fully qualified type name after the last '/'<br>in the type URL, for example "foo.bar.com/x/y.z" will yield type<br>name "y.z".<br><br><br>JSON<br>====<br>The JSON representation of an `Any` value uses the regular<br>representation of the deserialized, embedded message, with an<br>additional field `@type` which contains the type URL. Example:<br><br>    package google.profile;<br>    message Person {<br>      string first_name = 1;<br>      string last_name = 2;<br>    }<br><br>    {<br>      "@type": "type.googleapis.com/google.profile.Person",<br>      "firstName": <string>,<br>      "lastName": <string><br>    }<br><br>If the embedded message type is well-known and has a custom JSON<br>representation, that representation will be embedded adding a field<br>`value` which holds the custom JSON in addition to the `@type`<br>field. Example (for message [google.protobuf.Duration][]):<br><br>    {<br>      "@type": "type.googleapis.com/google.protobuf.Duration",<br>      "value": "1.212s"<br>    }|
|»»»» **additionalProperties**|any|false|none|none|
|»»»» @type|string|false|none|A URL/resource name that uniquely identifies the type of the serialized<br>protocol buffer message. This string must contain at least<br>one "/" character. The last segment of the URL's path must represent<br>the fully qualified name of the type (as in<br>`path/google.protobuf.Duration`). The name should be in a canonical form<br>(e.g., leading "." is not accepted).<br><br>In practice, teams usually precompile into the binary all types that they<br>expect it to use in the context of Any. However, for URLs which use the<br>scheme `http`, `https`, or no scheme, one can optionally set up a type<br>server that maps type URLs to message definitions as follows:<br><br>* If no scheme is provided, `https` is assumed.<br>* An HTTP GET on the URL must yield a [google.protobuf.Type][]<br>  value in binary format, or produce an error.<br>* Applications are allowed to cache lookup results based on the<br>  URL, or have them precompiled into a binary to avoid any<br>  lookup. Therefore, binary compatibility needs to be preserved<br>  on changes to types. (Use versioned type names to manage<br>  breaking changes.)<br><br>Note: this functionality is not currently available in the official<br>protobuf release, and it is not used for type URLs beginning with<br>type.googleapis.com.<br><br>Schemes other than `http`, `https` (or the empty scheme) might be<br>used with implementation specific semantics.|
|»»» jailed|boolean|false|none|jailed defined whether the validator has been jailed from bonded status or not.|
|»»» status|string|false|none|status is the validator status (bonded/unbonding/unbonded).|
|»»» tokens|string|false|none|tokens define the delegated tokens (incl. self-delegation).|
|»»» delegatorShares|string|false|none|delegator_shares defines total shares issued to a validator's delegators.|
|»»» description|object|false|none|description defines the description terms for the validator.|
|»»»» moniker|string|false|none|moniker defines a human-readable name for the validator.|
|»»»» identity|string|false|none|identity defines an optional identity signature (ex. UPort or Keybase).|
|»»»» website|string|false|none|website defines an optional website link.|
|»»»» securityContact|string|false|none|security_contact defines an optional email for security contact.|
|»»»» details|string|false|none|details define other optional details.|
|»»» unbondingHeight|string(int64)|false|none|unbonding_height defines, if unbonding, the height at which this validator has begun unbonding.|
|»»» unbondingTime|string(date-time)|false|none|unbonding_time defines, if unbonding, the min time for the validator to complete unbonding.|
|»»» commission|object|false|none|commission defines the commission parameters.|
|»»»» commissionRates|object|false|none|commission_rates defines the initial commission rates to be used for creating a validator.|
|»»»»» rate|string|false|none|rate is the commission rate charged to delegators, as a fraction.|
|»»»»» maxRate|string|false|none|max_rate defines the maximum commission rate which validator can ever charge, as a fraction.|
|»»»»» maxChangeRate|string|false|none|max_change_rate defines the maximum daily increase of the validator commission, as a fraction.|
|»»»» updateTime|string(date-time)|false|none|update_time is the last time the commission rate was changed.|
|»»» minSelfDelegation|string|false|none|min_self_delegation is the validator's self declared minimum self delegation.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|BOND_STATUS_UNSPECIFIED|
|status|BOND_STATUS_UNBONDED|
|status|BOND_STATUS_UNBONDING|
|status|BOND_STATUS_BONDED|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int32)|false|none|none|
|» message|string|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|any|false|none|none|
|»» @type|string|false|none|A URL/resource name that uniquely identifies the type of the serialized<br>protocol buffer message. This string must contain at least<br>one "/" character. The last segment of the URL's path must represent<br>the fully qualified name of the type (as in<br>`path/google.protobuf.Duration`). The name should be in a canonical form<br>(e.g., leading "." is not accepted).<br><br>In practice, teams usually precompile into the binary all types that they<br>expect it to use in the context of Any. However, for URLs which use the<br>scheme `http`, `https`, or no scheme, one can optionally set up a type<br>server that maps type URLs to message definitions as follows:<br><br>* If no scheme is provided, `https` is assumed.<br>* An HTTP GET on the URL must yield a [google.protobuf.Type][]<br>  value in binary format, or produce an error.<br>* Applications are allowed to cache lookup results based on the<br>  URL, or have them precompiled into a binary to avoid any<br>  lookup. Therefore, binary compatibility needs to be preserved<br>  on changes to types. (Use versioned type names to manage<br>  breaking changes.)<br><br>Note: this functionality is not currently available in the official<br>protobuf release, and it is not used for type URLs beginning with<br>type.googleapis.com.<br><br>Schemes other than `http`, `https` (or the empty scheme) might be<br>used with implementation specific semantics.|

<aside class="success">
This operation does not require authentication
</aside>

## CosmosStakingV1Beta1Params

<a id="opIdCosmosStakingV1Beta1Params"></a>

`GET /cosmos/staking/v1beta1/params`

*Parameters queries the staking parameters.*

> Example responses

> 200 Response

<h3 id="cosmosstakingv1beta1params-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|Inline|
|default|Default|An unexpected error response.|Inline|

<h3 id="cosmosstakingv1beta1params-responseschema">Response Schema</h3>

Status Code **200**

*QueryParamsResponse is response type for the Query/Params RPC method.*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» params|object|false|none|params holds all the parameters of this module.|
|»» unbondingTime|string|false|none|unbonding_time is the time duration of unbonding.|
|»» maxValidators|integer(int64)|false|none|max_validators is the maximum number of validators.|
|»» maxEntries|integer(int64)|false|none|max_entries is the max entries for either unbonding delegation or redelegation (per pair/trio).|
|»» historicalEntries|integer(int64)|false|none|historical_entries is the number of historical entries to persist.|
|»» bondDenom|string|false|none|bond_denom defines the bondable coin denomination.|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int32)|false|none|none|
|» message|string|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|any|false|none|none|
|»» @type|string|false|none|A URL/resource name that uniquely identifies the type of the serialized<br>protocol buffer message. This string must contain at least<br>one "/" character. The last segment of the URL's path must represent<br>the fully qualified name of the type (as in<br>`path/google.protobuf.Duration`). The name should be in a canonical form<br>(e.g., leading "." is not accepted).<br><br>In practice, teams usually precompile into the binary all types that they<br>expect it to use in the context of Any. However, for URLs which use the<br>scheme `http`, `https`, or no scheme, one can optionally set up a type<br>server that maps type URLs to message definitions as follows:<br><br>* If no scheme is provided, `https` is assumed.<br>* An HTTP GET on the URL must yield a [google.protobuf.Type][]<br>  value in binary format, or produce an error.<br>* Applications are allowed to cache lookup results based on the<br>  URL, or have them precompiled into a binary to avoid any<br>  lookup. Therefore, binary compatibility needs to be preserved<br>  on changes to types. (Use versioned type names to manage<br>  breaking changes.)<br><br>Note: this functionality is not currently available in the official<br>protobuf release, and it is not used for type URLs beginning with<br>type.googleapis.com.<br><br>Schemes other than `http`, `https` (or the empty scheme) might be<br>used with implementation specific semantics.|

<aside class="success">
This operation does not require authentication
</aside>

## CosmosStakingV1Beta1Pool

<a id="opIdCosmosStakingV1Beta1Pool"></a>

`GET /cosmos/staking/v1beta1/pool`

*Pool queries the pool info.*

> Example responses

> 200 Response

<h3 id="cosmosstakingv1beta1pool-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|Inline|
|default|Default|An unexpected error response.|Inline|

<h3 id="cosmosstakingv1beta1pool-responseschema">Response Schema</h3>

Status Code **200**

*QueryPoolResponse is response type for the Query/Pool RPC method.*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» pool|object|false|none|pool defines the pool info.|
|»» notBondedTokens|string|false|none|none|
|»» bondedTokens|string|false|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int32)|false|none|none|
|» message|string|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|any|false|none|none|
|»» @type|string|false|none|A URL/resource name that uniquely identifies the type of the serialized<br>protocol buffer message. This string must contain at least<br>one "/" character. The last segment of the URL's path must represent<br>the fully qualified name of the type (as in<br>`path/google.protobuf.Duration`). The name should be in a canonical form<br>(e.g., leading "." is not accepted).<br><br>In practice, teams usually precompile into the binary all types that they<br>expect it to use in the context of Any. However, for URLs which use the<br>scheme `http`, `https`, or no scheme, one can optionally set up a type<br>server that maps type URLs to message definitions as follows:<br><br>* If no scheme is provided, `https` is assumed.<br>* An HTTP GET on the URL must yield a [google.protobuf.Type][]<br>  value in binary format, or produce an error.<br>* Applications are allowed to cache lookup results based on the<br>  URL, or have them precompiled into a binary to avoid any<br>  lookup. Therefore, binary compatibility needs to be preserved<br>  on changes to types. (Use versioned type names to manage<br>  breaking changes.)<br><br>Note: this functionality is not currently available in the official<br>protobuf release, and it is not used for type URLs beginning with<br>type.googleapis.com.<br><br>Schemes other than `http`, `https` (or the empty scheme) might be<br>used with implementation specific semantics.|

<aside class="success">
This operation does not require authentication
</aside>

## CosmosStakingV1Beta1Validators

<a id="opIdCosmosStakingV1Beta1Validators"></a>

`GET /cosmos/staking/v1beta1/validators`

*Validators queries all validators that match the given status.*

<h3 id="cosmosstakingv1beta1validators-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|status|query|string|false|status enables to query for validators matching a given status.|
|pagination.key|query|string(byte)|false|key is a value returned in PageResponse.next_key to begin|
|pagination.offset|query|string(uint64)|false|offset is a numeric offset that can be used when key is unavailable.|
|pagination.limit|query|string(uint64)|false|limit is the total number of results to be returned in the result page.|
|pagination.countTotal|query|boolean|false|count_total is set to true  to indicate that the result set should include|
|pagination.reverse|query|boolean|false|reverse is set to true if results are to be returned in the descending order.|

#### Detailed descriptions

**pagination.key**: key is a value returned in PageResponse.next_key to begin
querying the next page most efficiently. Only one of offset or key
should be set.

**pagination.offset**: offset is a numeric offset that can be used when key is unavailable.
It is less efficient than using key. Only one of offset or key should
be set.

**pagination.limit**: limit is the total number of results to be returned in the result page.
If left empty it will default to a value to be set by each app.

**pagination.countTotal**: count_total is set to true  to indicate that the result set should include
a count of the total number of items available for pagination in UIs.
count_total is only respected when offset is used. It is ignored when key
is set.

**pagination.reverse**: reverse is set to true if results are to be returned in the descending order.

Since: cosmos-sdk 0.43

> Example responses

> 200 Response

<h3 id="cosmosstakingv1beta1validators-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|Inline|
|default|Default|An unexpected error response.|Inline|

<h3 id="cosmosstakingv1beta1validators-responseschema">Response Schema</h3>

Status Code **200**

*QueryValidatorsResponse is response type for the Query/Validators RPC method*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» validators|[object]|false|none|validators contains all the queried validators.|
|»» operatorAddress|string|false|none|operator_address defines the address of the validator's operator; bech encoded in JSON.|
|»» consensusPubkey|object|false|none|`Any` contains an arbitrary serialized protocol buffer message along with a<br>URL that describes the type of the serialized message.<br><br>Protobuf library provides support to pack/unpack Any values in the form<br>of utility functions or additional generated methods of the Any type.<br><br>Example 1: Pack and unpack a message in C++.<br><br>    Foo foo = ...;<br>    Any any;<br>    any.PackFrom(foo);<br>    ...<br>    if (any.UnpackTo(&foo)) {<br>      ...<br>    }<br><br>Example 2: Pack and unpack a message in Java.<br><br>    Foo foo = ...;<br>    Any any = Any.pack(foo);<br>    ...<br>    if (any.is(Foo.class)) {<br>      foo = any.unpack(Foo.class);<br>    }<br><br> Example 3: Pack and unpack a message in Python.<br><br>    foo = Foo(...)<br>    any = Any()<br>    any.Pack(foo)<br>    ...<br>    if any.Is(Foo.DESCRIPTOR):<br>      any.Unpack(foo)<br>      ...<br><br> Example 4: Pack and unpack a message in Go<br><br>     foo := &pb.Foo{...}<br>     any, err := anypb.New(foo)<br>     if err != nil {<br>       ...<br>     }<br>     ...<br>     foo := &pb.Foo{}<br>     if err := any.UnmarshalTo(foo); err != nil {<br>       ...<br>     }<br><br>The pack methods provided by protobuf library will by default use<br>'type.googleapis.com/full.type.name' as the type URL and the unpack<br>methods only use the fully qualified type name after the last '/'<br>in the type URL, for example "foo.bar.com/x/y.z" will yield type<br>name "y.z".<br><br><br>JSON<br>====<br>The JSON representation of an `Any` value uses the regular<br>representation of the deserialized, embedded message, with an<br>additional field `@type` which contains the type URL. Example:<br><br>    package google.profile;<br>    message Person {<br>      string first_name = 1;<br>      string last_name = 2;<br>    }<br><br>    {<br>      "@type": "type.googleapis.com/google.profile.Person",<br>      "firstName": <string>,<br>      "lastName": <string><br>    }<br><br>If the embedded message type is well-known and has a custom JSON<br>representation, that representation will be embedded adding a field<br>`value` which holds the custom JSON in addition to the `@type`<br>field. Example (for message [google.protobuf.Duration][]):<br><br>    {<br>      "@type": "type.googleapis.com/google.protobuf.Duration",<br>      "value": "1.212s"<br>    }|
|»»» **additionalProperties**|any|false|none|none|
|»»» @type|string|false|none|A URL/resource name that uniquely identifies the type of the serialized<br>protocol buffer message. This string must contain at least<br>one "/" character. The last segment of the URL's path must represent<br>the fully qualified name of the type (as in<br>`path/google.protobuf.Duration`). The name should be in a canonical form<br>(e.g., leading "." is not accepted).<br><br>In practice, teams usually precompile into the binary all types that they<br>expect it to use in the context of Any. However, for URLs which use the<br>scheme `http`, `https`, or no scheme, one can optionally set up a type<br>server that maps type URLs to message definitions as follows:<br><br>* If no scheme is provided, `https` is assumed.<br>* An HTTP GET on the URL must yield a [google.protobuf.Type][]<br>  value in binary format, or produce an error.<br>* Applications are allowed to cache lookup results based on the<br>  URL, or have them precompiled into a binary to avoid any<br>  lookup. Therefore, binary compatibility needs to be preserved<br>  on changes to types. (Use versioned type names to manage<br>  breaking changes.)<br><br>Note: this functionality is not currently available in the official<br>protobuf release, and it is not used for type URLs beginning with<br>type.googleapis.com.<br><br>Schemes other than `http`, `https` (or the empty scheme) might be<br>used with implementation specific semantics.|
|»» jailed|boolean|false|none|jailed defined whether the validator has been jailed from bonded status or not.|
|»» status|string|false|none|status is the validator status (bonded/unbonding/unbonded).|
|»» tokens|string|false|none|tokens define the delegated tokens (incl. self-delegation).|
|»» delegatorShares|string|false|none|delegator_shares defines total shares issued to a validator's delegators.|
|»» description|object|false|none|description defines the description terms for the validator.|
|»»» moniker|string|false|none|moniker defines a human-readable name for the validator.|
|»»» identity|string|false|none|identity defines an optional identity signature (ex. UPort or Keybase).|
|»»» website|string|false|none|website defines an optional website link.|
|»»» securityContact|string|false|none|security_contact defines an optional email for security contact.|
|»»» details|string|false|none|details define other optional details.|
|»» unbondingHeight|string(int64)|false|none|unbonding_height defines, if unbonding, the height at which this validator has begun unbonding.|
|»» unbondingTime|string(date-time)|false|none|unbonding_time defines, if unbonding, the min time for the validator to complete unbonding.|
|»» commission|object|false|none|commission defines the commission parameters.|
|»»» commissionRates|object|false|none|commission_rates defines the initial commission rates to be used for creating a validator.|
|»»»» rate|string|false|none|rate is the commission rate charged to delegators, as a fraction.|
|»»»» maxRate|string|false|none|max_rate defines the maximum commission rate which validator can ever charge, as a fraction.|
|»»»» maxChangeRate|string|false|none|max_change_rate defines the maximum daily increase of the validator commission, as a fraction.|
|»»» updateTime|string(date-time)|false|none|update_time is the last time the commission rate was changed.|
|»» minSelfDelegation|string|false|none|min_self_delegation is the validator's self declared minimum self delegation.|
|» pagination|object|false|none|pagination defines the pagination in the response.|
|»» nextKey|string(byte)|false|none|none|
|»» total|string(uint64)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|BOND_STATUS_UNSPECIFIED|
|status|BOND_STATUS_UNBONDED|
|status|BOND_STATUS_UNBONDING|
|status|BOND_STATUS_BONDED|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int32)|false|none|none|
|» message|string|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|any|false|none|none|
|»» @type|string|false|none|A URL/resource name that uniquely identifies the type of the serialized<br>protocol buffer message. This string must contain at least<br>one "/" character. The last segment of the URL's path must represent<br>the fully qualified name of the type (as in<br>`path/google.protobuf.Duration`). The name should be in a canonical form<br>(e.g., leading "." is not accepted).<br><br>In practice, teams usually precompile into the binary all types that they<br>expect it to use in the context of Any. However, for URLs which use the<br>scheme `http`, `https`, or no scheme, one can optionally set up a type<br>server that maps type URLs to message definitions as follows:<br><br>* If no scheme is provided, `https` is assumed.<br>* An HTTP GET on the URL must yield a [google.protobuf.Type][]<br>  value in binary format, or produce an error.<br>* Applications are allowed to cache lookup results based on the<br>  URL, or have them precompiled into a binary to avoid any<br>  lookup. Therefore, binary compatibility needs to be preserved<br>  on changes to types. (Use versioned type names to manage<br>  breaking changes.)<br><br>Note: this functionality is not currently available in the official<br>protobuf release, and it is not used for type URLs beginning with<br>type.googleapis.com.<br><br>Schemes other than `http`, `https` (or the empty scheme) might be<br>used with implementation specific semantics.|

<aside class="success">
This operation does not require authentication
</aside>

## CosmosStakingV1Beta1Validator

<a id="opIdCosmosStakingV1Beta1Validator"></a>

`GET /cosmos/staking/v1beta1/validators/{validatorAddr}`

*Validator queries validator info for given validator address.*

<h3 id="cosmosstakingv1beta1validator-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|validatorAddr|path|string|true|validator_addr defines the validator address to query for.|

> Example responses

> 200 Response

<h3 id="cosmosstakingv1beta1validator-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|Inline|
|default|Default|An unexpected error response.|Inline|

<h3 id="cosmosstakingv1beta1validator-responseschema">Response Schema</h3>

Status Code **200**

*QueryValidatorResponse is response type for the Query/Validator RPC method*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» validator|object|false|none|Validator defines a validator, together with the total amount of the<br>Validator's bond shares and their exchange rate to coins. Slashing results in<br>a decrease in the exchange rate, allowing correct calculation of future<br>undelegations without iterating over delegators. When coins are delegated to<br>this validator, the validator is credited with a delegation whose number of<br>bond shares is based on the amount of coins delegated divided by the current<br>exchange rate. Voting power can be calculated as total bonded shares<br>multiplied by exchange rate.|
|»» operatorAddress|string|false|none|operator_address defines the address of the validator's operator; bech encoded in JSON.|
|»» consensusPubkey|object|false|none|`Any` contains an arbitrary serialized protocol buffer message along with a<br>URL that describes the type of the serialized message.<br><br>Protobuf library provides support to pack/unpack Any values in the form<br>of utility functions or additional generated methods of the Any type.<br><br>Example 1: Pack and unpack a message in C++.<br><br>    Foo foo = ...;<br>    Any any;<br>    any.PackFrom(foo);<br>    ...<br>    if (any.UnpackTo(&foo)) {<br>      ...<br>    }<br><br>Example 2: Pack and unpack a message in Java.<br><br>    Foo foo = ...;<br>    Any any = Any.pack(foo);<br>    ...<br>    if (any.is(Foo.class)) {<br>      foo = any.unpack(Foo.class);<br>    }<br><br> Example 3: Pack and unpack a message in Python.<br><br>    foo = Foo(...)<br>    any = Any()<br>    any.Pack(foo)<br>    ...<br>    if any.Is(Foo.DESCRIPTOR):<br>      any.Unpack(foo)<br>      ...<br><br> Example 4: Pack and unpack a message in Go<br><br>     foo := &pb.Foo{...}<br>     any, err := anypb.New(foo)<br>     if err != nil {<br>       ...<br>     }<br>     ...<br>     foo := &pb.Foo{}<br>     if err := any.UnmarshalTo(foo); err != nil {<br>       ...<br>     }<br><br>The pack methods provided by protobuf library will by default use<br>'type.googleapis.com/full.type.name' as the type URL and the unpack<br>methods only use the fully qualified type name after the last '/'<br>in the type URL, for example "foo.bar.com/x/y.z" will yield type<br>name "y.z".<br><br><br>JSON<br>====<br>The JSON representation of an `Any` value uses the regular<br>representation of the deserialized, embedded message, with an<br>additional field `@type` which contains the type URL. Example:<br><br>    package google.profile;<br>    message Person {<br>      string first_name = 1;<br>      string last_name = 2;<br>    }<br><br>    {<br>      "@type": "type.googleapis.com/google.profile.Person",<br>      "firstName": <string>,<br>      "lastName": <string><br>    }<br><br>If the embedded message type is well-known and has a custom JSON<br>representation, that representation will be embedded adding a field<br>`value` which holds the custom JSON in addition to the `@type`<br>field. Example (for message [google.protobuf.Duration][]):<br><br>    {<br>      "@type": "type.googleapis.com/google.protobuf.Duration",<br>      "value": "1.212s"<br>    }|
|»»» **additionalProperties**|any|false|none|none|
|»»» @type|string|false|none|A URL/resource name that uniquely identifies the type of the serialized<br>protocol buffer message. This string must contain at least<br>one "/" character. The last segment of the URL's path must represent<br>the fully qualified name of the type (as in<br>`path/google.protobuf.Duration`). The name should be in a canonical form<br>(e.g., leading "." is not accepted).<br><br>In practice, teams usually precompile into the binary all types that they<br>expect it to use in the context of Any. However, for URLs which use the<br>scheme `http`, `https`, or no scheme, one can optionally set up a type<br>server that maps type URLs to message definitions as follows:<br><br>* If no scheme is provided, `https` is assumed.<br>* An HTTP GET on the URL must yield a [google.protobuf.Type][]<br>  value in binary format, or produce an error.<br>* Applications are allowed to cache lookup results based on the<br>  URL, or have them precompiled into a binary to avoid any<br>  lookup. Therefore, binary compatibility needs to be preserved<br>  on changes to types. (Use versioned type names to manage<br>  breaking changes.)<br><br>Note: this functionality is not currently available in the official<br>protobuf release, and it is not used for type URLs beginning with<br>type.googleapis.com.<br><br>Schemes other than `http`, `https` (or the empty scheme) might be<br>used with implementation specific semantics.|
|»» jailed|boolean|false|none|jailed defined whether the validator has been jailed from bonded status or not.|
|»» status|string|false|none|status is the validator status (bonded/unbonding/unbonded).|
|»» tokens|string|false|none|tokens define the delegated tokens (incl. self-delegation).|
|»» delegatorShares|string|false|none|delegator_shares defines total shares issued to a validator's delegators.|
|»» description|object|false|none|description defines the description terms for the validator.|
|»»» moniker|string|false|none|moniker defines a human-readable name for the validator.|
|»»» identity|string|false|none|identity defines an optional identity signature (ex. UPort or Keybase).|
|»»» website|string|false|none|website defines an optional website link.|
|»»» securityContact|string|false|none|security_contact defines an optional email for security contact.|
|»»» details|string|false|none|details define other optional details.|
|»» unbondingHeight|string(int64)|false|none|unbonding_height defines, if unbonding, the height at which this validator has begun unbonding.|
|»» unbondingTime|string(date-time)|false|none|unbonding_time defines, if unbonding, the min time for the validator to complete unbonding.|
|»» commission|object|false|none|commission defines the commission parameters.|
|»»» commissionRates|object|false|none|commission_rates defines the initial commission rates to be used for creating a validator.|
|»»»» rate|string|false|none|rate is the commission rate charged to delegators, as a fraction.|
|»»»» maxRate|string|false|none|max_rate defines the maximum commission rate which validator can ever charge, as a fraction.|
|»»»» maxChangeRate|string|false|none|max_change_rate defines the maximum daily increase of the validator commission, as a fraction.|
|»»» updateTime|string(date-time)|false|none|update_time is the last time the commission rate was changed.|
|»» minSelfDelegation|string|false|none|min_self_delegation is the validator's self declared minimum self delegation.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|BOND_STATUS_UNSPECIFIED|
|status|BOND_STATUS_UNBONDED|
|status|BOND_STATUS_UNBONDING|
|status|BOND_STATUS_BONDED|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int32)|false|none|none|
|» message|string|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|any|false|none|none|
|»» @type|string|false|none|A URL/resource name that uniquely identifies the type of the serialized<br>protocol buffer message. This string must contain at least<br>one "/" character. The last segment of the URL's path must represent<br>the fully qualified name of the type (as in<br>`path/google.protobuf.Duration`). The name should be in a canonical form<br>(e.g., leading "." is not accepted).<br><br>In practice, teams usually precompile into the binary all types that they<br>expect it to use in the context of Any. However, for URLs which use the<br>scheme `http`, `https`, or no scheme, one can optionally set up a type<br>server that maps type URLs to message definitions as follows:<br><br>* If no scheme is provided, `https` is assumed.<br>* An HTTP GET on the URL must yield a [google.protobuf.Type][]<br>  value in binary format, or produce an error.<br>* Applications are allowed to cache lookup results based on the<br>  URL, or have them precompiled into a binary to avoid any<br>  lookup. Therefore, binary compatibility needs to be preserved<br>  on changes to types. (Use versioned type names to manage<br>  breaking changes.)<br><br>Note: this functionality is not currently available in the official<br>protobuf release, and it is not used for type URLs beginning with<br>type.googleapis.com.<br><br>Schemes other than `http`, `https` (or the empty scheme) might be<br>used with implementation specific semantics.|

<aside class="success">
This operation does not require authentication
</aside>

## CosmosStakingV1Beta1ValidatorDelegations

<a id="opIdCosmosStakingV1Beta1ValidatorDelegations"></a>

`GET /cosmos/staking/v1beta1/validators/{validatorAddr}/delegations`

*ValidatorDelegations queries delegate info for given validator.*

<h3 id="cosmosstakingv1beta1validatordelegations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|validatorAddr|path|string|true|validator_addr defines the validator address to query for.|
|pagination.key|query|string(byte)|false|key is a value returned in PageResponse.next_key to begin|
|pagination.offset|query|string(uint64)|false|offset is a numeric offset that can be used when key is unavailable.|
|pagination.limit|query|string(uint64)|false|limit is the total number of results to be returned in the result page.|
|pagination.countTotal|query|boolean|false|count_total is set to true  to indicate that the result set should include|
|pagination.reverse|query|boolean|false|reverse is set to true if results are to be returned in the descending order.|

#### Detailed descriptions

**pagination.key**: key is a value returned in PageResponse.next_key to begin
querying the next page most efficiently. Only one of offset or key
should be set.

**pagination.offset**: offset is a numeric offset that can be used when key is unavailable.
It is less efficient than using key. Only one of offset or key should
be set.

**pagination.limit**: limit is the total number of results to be returned in the result page.
If left empty it will default to a value to be set by each app.

**pagination.countTotal**: count_total is set to true  to indicate that the result set should include
a count of the total number of items available for pagination in UIs.
count_total is only respected when offset is used. It is ignored when key
is set.

**pagination.reverse**: reverse is set to true if results are to be returned in the descending order.

Since: cosmos-sdk 0.43

> Example responses

> 200 Response

<h3 id="cosmosstakingv1beta1validatordelegations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|Inline|
|default|Default|An unexpected error response.|Inline|

<h3 id="cosmosstakingv1beta1validatordelegations-responseschema">Response Schema</h3>

Status Code **200**

*QueryValidatorDelegationsResponse is response type for the
Query/ValidatorDelegations RPC method*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» delegationResponses|[object]|false|none|none|
|»» delegation|object|false|none|Delegation represents the bond with tokens held by an account. It is<br>owned by one delegator, and is associated with the voting power of one<br>validator.|
|»»» delegatorAddress|string|false|none|delegator_address is the bech32-encoded address of the delegator.|
|»»» validatorAddress|string|false|none|validator_address is the bech32-encoded address of the validator.|
|»»» shares|string|false|none|shares define the delegation shares received.|
|»» balance|object|false|none|Coin defines a token with a denomination and an amount.<br><br>NOTE: The amount field is an Int which implements the custom method<br>signatures required by gogoproto.|
|»»» denom|string|false|none|none|
|»»» amount|string|false|none|none|
|» pagination|object|false|none|pagination defines the pagination in the response.|
|»» nextKey|string(byte)|false|none|none|
|»» total|string(uint64)|false|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int32)|false|none|none|
|» message|string|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|any|false|none|none|
|»» @type|string|false|none|A URL/resource name that uniquely identifies the type of the serialized<br>protocol buffer message. This string must contain at least<br>one "/" character. The last segment of the URL's path must represent<br>the fully qualified name of the type (as in<br>`path/google.protobuf.Duration`). The name should be in a canonical form<br>(e.g., leading "." is not accepted).<br><br>In practice, teams usually precompile into the binary all types that they<br>expect it to use in the context of Any. However, for URLs which use the<br>scheme `http`, `https`, or no scheme, one can optionally set up a type<br>server that maps type URLs to message definitions as follows:<br><br>* If no scheme is provided, `https` is assumed.<br>* An HTTP GET on the URL must yield a [google.protobuf.Type][]<br>  value in binary format, or produce an error.<br>* Applications are allowed to cache lookup results based on the<br>  URL, or have them precompiled into a binary to avoid any<br>  lookup. Therefore, binary compatibility needs to be preserved<br>  on changes to types. (Use versioned type names to manage<br>  breaking changes.)<br><br>Note: this functionality is not currently available in the official<br>protobuf release, and it is not used for type URLs beginning with<br>type.googleapis.com.<br><br>Schemes other than `http`, `https` (or the empty scheme) might be<br>used with implementation specific semantics.|

<aside class="success">
This operation does not require authentication
</aside>

## CosmosStakingV1Beta1Delegation

<a id="opIdCosmosStakingV1Beta1Delegation"></a>

`GET /cosmos/staking/v1beta1/validators/{validatorAddr}/delegations/{delegatorAddr}`

*Delegation queries delegate info for given validator delegator pair.*

<h3 id="cosmosstakingv1beta1delegation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|validatorAddr|path|string|true|validator_addr defines the validator address to query for.|
|delegatorAddr|path|string|true|delegator_addr defines the delegator address to query for.|

> Example responses

> 200 Response

<h3 id="cosmosstakingv1beta1delegation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|Inline|
|default|Default|An unexpected error response.|Inline|

<h3 id="cosmosstakingv1beta1delegation-responseschema">Response Schema</h3>

Status Code **200**

*QueryDelegationResponse is response type for the Query/Delegation RPC method.*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» delegationResponse|object|false|none|DelegationResponse is equivalent to Delegation except that it contains a<br>balance in addition to shares which is more suitable for client responses.|
|»» delegation|object|false|none|Delegation represents the bond with tokens held by an account. It is<br>owned by one delegator, and is associated with the voting power of one<br>validator.|
|»»» delegatorAddress|string|false|none|delegator_address is the bech32-encoded address of the delegator.|
|»»» validatorAddress|string|false|none|validator_address is the bech32-encoded address of the validator.|
|»»» shares|string|false|none|shares define the delegation shares received.|
|»» balance|object|false|none|Coin defines a token with a denomination and an amount.<br><br>NOTE: The amount field is an Int which implements the custom method<br>signatures required by gogoproto.|
|»»» denom|string|false|none|none|
|»»» amount|string|false|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int32)|false|none|none|
|» message|string|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|any|false|none|none|
|»» @type|string|false|none|A URL/resource name that uniquely identifies the type of the serialized<br>protocol buffer message. This string must contain at least<br>one "/" character. The last segment of the URL's path must represent<br>the fully qualified name of the type (as in<br>`path/google.protobuf.Duration`). The name should be in a canonical form<br>(e.g., leading "." is not accepted).<br><br>In practice, teams usually precompile into the binary all types that they<br>expect it to use in the context of Any. However, for URLs which use the<br>scheme `http`, `https`, or no scheme, one can optionally set up a type<br>server that maps type URLs to message definitions as follows:<br><br>* If no scheme is provided, `https` is assumed.<br>* An HTTP GET on the URL must yield a [google.protobuf.Type][]<br>  value in binary format, or produce an error.<br>* Applications are allowed to cache lookup results based on the<br>  URL, or have them precompiled into a binary to avoid any<br>  lookup. Therefore, binary compatibility needs to be preserved<br>  on changes to types. (Use versioned type names to manage<br>  breaking changes.)<br><br>Note: this functionality is not currently available in the official<br>protobuf release, and it is not used for type URLs beginning with<br>type.googleapis.com.<br><br>Schemes other than `http`, `https` (or the empty scheme) might be<br>used with implementation specific semantics.|

<aside class="success">
This operation does not require authentication
</aside>

## CosmosStakingV1Beta1UnbondingDelegation

<a id="opIdCosmosStakingV1Beta1UnbondingDelegation"></a>

`GET /cosmos/staking/v1beta1/validators/{validatorAddr}/delegations/{delegatorAddr}/unbonding_delegation`

*UnbondingDelegation queries unbonding info for given validator delegator
pair.*

<h3 id="cosmosstakingv1beta1unbondingdelegation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|validatorAddr|path|string|true|validator_addr defines the validator address to query for.|
|delegatorAddr|path|string|true|delegator_addr defines the delegator address to query for.|

> Example responses

> 200 Response

<h3 id="cosmosstakingv1beta1unbondingdelegation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|Inline|
|default|Default|An unexpected error response.|Inline|

<h3 id="cosmosstakingv1beta1unbondingdelegation-responseschema">Response Schema</h3>

Status Code **200**

*QueryDelegationResponse is response type for the Query/UnbondingDelegation
RPC method.*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» unbond|object|false|none|UnbondingDelegation stores all of a single delegator's unbonding bonds<br>for a single validator in an time-ordered list.|
|»» delegatorAddress|string|false|none|delegator_address is the bech32-encoded address of the delegator.|
|»» validatorAddress|string|false|none|validator_address is the bech32-encoded address of the validator.|
|»» entries|[object]|false|none|entries are the unbonding delegation entries.|
|»»» creationHeight|string(int64)|false|none|creation_height is the height which the unbonding took place.|
|»»» completionTime|string(date-time)|false|none|completion_time is the unix time for unbonding completion.|
|»»» initialBalance|string|false|none|initial_balance defines the tokens initially scheduled to receive at completion.|
|»»» balance|string|false|none|balance defines the tokens to receive at completion.|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int32)|false|none|none|
|» message|string|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|any|false|none|none|
|»» @type|string|false|none|A URL/resource name that uniquely identifies the type of the serialized<br>protocol buffer message. This string must contain at least<br>one "/" character. The last segment of the URL's path must represent<br>the fully qualified name of the type (as in<br>`path/google.protobuf.Duration`). The name should be in a canonical form<br>(e.g., leading "." is not accepted).<br><br>In practice, teams usually precompile into the binary all types that they<br>expect it to use in the context of Any. However, for URLs which use the<br>scheme `http`, `https`, or no scheme, one can optionally set up a type<br>server that maps type URLs to message definitions as follows:<br><br>* If no scheme is provided, `https` is assumed.<br>* An HTTP GET on the URL must yield a [google.protobuf.Type][]<br>  value in binary format, or produce an error.<br>* Applications are allowed to cache lookup results based on the<br>  URL, or have them precompiled into a binary to avoid any<br>  lookup. Therefore, binary compatibility needs to be preserved<br>  on changes to types. (Use versioned type names to manage<br>  breaking changes.)<br><br>Note: this functionality is not currently available in the official<br>protobuf release, and it is not used for type URLs beginning with<br>type.googleapis.com.<br><br>Schemes other than `http`, `https` (or the empty scheme) might be<br>used with implementation specific semantics.|

<aside class="success">
This operation does not require authentication
</aside>

## CosmosStakingV1Beta1ValidatorUnbondingDelegations

<a id="opIdCosmosStakingV1Beta1ValidatorUnbondingDelegations"></a>

`GET /cosmos/staking/v1beta1/validators/{validatorAddr}/unbonding_delegations`

*ValidatorUnbondingDelegations queries unbonding delegations of a validator.*

<h3 id="cosmosstakingv1beta1validatorunbondingdelegations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|validatorAddr|path|string|true|validator_addr defines the validator address to query for.|
|pagination.key|query|string(byte)|false|key is a value returned in PageResponse.next_key to begin|
|pagination.offset|query|string(uint64)|false|offset is a numeric offset that can be used when key is unavailable.|
|pagination.limit|query|string(uint64)|false|limit is the total number of results to be returned in the result page.|
|pagination.countTotal|query|boolean|false|count_total is set to true  to indicate that the result set should include|
|pagination.reverse|query|boolean|false|reverse is set to true if results are to be returned in the descending order.|

#### Detailed descriptions

**pagination.key**: key is a value returned in PageResponse.next_key to begin
querying the next page most efficiently. Only one of offset or key
should be set.

**pagination.offset**: offset is a numeric offset that can be used when key is unavailable.
It is less efficient than using key. Only one of offset or key should
be set.

**pagination.limit**: limit is the total number of results to be returned in the result page.
If left empty it will default to a value to be set by each app.

**pagination.countTotal**: count_total is set to true  to indicate that the result set should include
a count of the total number of items available for pagination in UIs.
count_total is only respected when offset is used. It is ignored when key
is set.

**pagination.reverse**: reverse is set to true if results are to be returned in the descending order.

Since: cosmos-sdk 0.43

> Example responses

> 200 Response

<h3 id="cosmosstakingv1beta1validatorunbondingdelegations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|Inline|
|default|Default|An unexpected error response.|Inline|

<h3 id="cosmosstakingv1beta1validatorunbondingdelegations-responseschema">Response Schema</h3>

Status Code **200**

*QueryValidatorUnbondingDelegationsResponse is response type for the
Query/ValidatorUnbondingDelegations RPC method.*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» unbondingResponses|[object]|false|none|none|
|»» delegatorAddress|string|false|none|delegator_address is the bech32-encoded address of the delegator.|
|»» validatorAddress|string|false|none|validator_address is the bech32-encoded address of the validator.|
|»» entries|[object]|false|none|entries are the unbonding delegation entries.|
|»»» creationHeight|string(int64)|false|none|creation_height is the height which the unbonding took place.|
|»»» completionTime|string(date-time)|false|none|completion_time is the unix time for unbonding completion.|
|»»» initialBalance|string|false|none|initial_balance defines the tokens initially scheduled to receive at completion.|
|»»» balance|string|false|none|balance defines the tokens to receive at completion.|
|» pagination|object|false|none|pagination defines the pagination in the response.|
|»» nextKey|string(byte)|false|none|none|
|»» total|string(uint64)|false|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int32)|false|none|none|
|» message|string|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|any|false|none|none|
|»» @type|string|false|none|A URL/resource name that uniquely identifies the type of the serialized<br>protocol buffer message. This string must contain at least<br>one "/" character. The last segment of the URL's path must represent<br>the fully qualified name of the type (as in<br>`path/google.protobuf.Duration`). The name should be in a canonical form<br>(e.g., leading "." is not accepted).<br><br>In practice, teams usually precompile into the binary all types that they<br>expect it to use in the context of Any. However, for URLs which use the<br>scheme `http`, `https`, or no scheme, one can optionally set up a type<br>server that maps type URLs to message definitions as follows:<br><br>* If no scheme is provided, `https` is assumed.<br>* An HTTP GET on the URL must yield a [google.protobuf.Type][]<br>  value in binary format, or produce an error.<br>* Applications are allowed to cache lookup results based on the<br>  URL, or have them precompiled into a binary to avoid any<br>  lookup. Therefore, binary compatibility needs to be preserved<br>  on changes to types. (Use versioned type names to manage<br>  breaking changes.)<br><br>Note: this functionality is not currently available in the official<br>protobuf release, and it is not used for type URLs beginning with<br>type.googleapis.com.<br><br>Schemes other than `http`, `https` (or the empty scheme) might be<br>used with implementation specific semantics.|

<aside class="success">
This operation does not require authentication
</aside>

## CosmwasmWasmV1Codes

<a id="opIdCosmwasmWasmV1Codes"></a>

`GET /cosmwasm/wasm/v1/code`

*Codes gets the metadata for all stored wasm codes*

<h3 id="cosmwasmwasmv1codes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pagination.key|query|string(byte)|false|key is a value returned in PageResponse.next_key to begin|
|pagination.offset|query|string(uint64)|false|offset is a numeric offset that can be used when key is unavailable.|
|pagination.limit|query|string(uint64)|false|limit is the total number of results to be returned in the result page.|
|pagination.countTotal|query|boolean|false|count_total is set to true  to indicate that the result set should include|
|pagination.reverse|query|boolean|false|reverse is set to true if results are to be returned in the descending order.|

#### Detailed descriptions

**pagination.key**: key is a value returned in PageResponse.next_key to begin
querying the next page most efficiently. Only one of offset or key
should be set.

**pagination.offset**: offset is a numeric offset that can be used when key is unavailable.
It is less efficient than using key. Only one of offset or key should
be set.

**pagination.limit**: limit is the total number of results to be returned in the result page.
If left empty it will default to a value to be set by each app.

**pagination.countTotal**: count_total is set to true  to indicate that the result set should include
a count of the total number of items available for pagination in UIs.
count_total is only respected when offset is used. It is ignored when key
is set.

**pagination.reverse**: reverse is set to true if results are to be returned in the descending order.

Since: cosmos-sdk 0.43

> Example responses

> 200 Response

<h3 id="cosmwasmwasmv1codes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|Inline|
|default|Default|An unexpected error response.|Inline|

<h3 id="cosmwasmwasmv1codes-responseschema">Response Schema</h3>

Status Code **200**

*QueryCodesResponse is the response type for the Query/Codes RPC method*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» codeInfos|[object]|false|none|none|
|»» CodeInfoResponse contains code meta data from CodeInfo|object|false|none|none|
|»»» codeId|string(uint64)|false|none|none|
|»»» creator|string|false|none|none|
|»»» dataHash|string(byte)|false|none|none|
|» pagination|object|false|none|pagination defines the pagination in the response.|
|»» nextKey|string(byte)|false|none|none|
|»» total|string(uint64)|false|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int32)|false|none|none|
|» message|string|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|any|false|none|none|
|»» @type|string|false|none|A URL/resource name that uniquely identifies the type of the serialized<br>protocol buffer message. This string must contain at least<br>one "/" character. The last segment of the URL's path must represent<br>the fully qualified name of the type (as in<br>`path/google.protobuf.Duration`). The name should be in a canonical form<br>(e.g., leading "." is not accepted).<br><br>In practice, teams usually precompile into the binary all types that they<br>expect it to use in the context of Any. However, for URLs which use the<br>scheme `http`, `https`, or no scheme, one can optionally set up a type<br>server that maps type URLs to message definitions as follows:<br><br>* If no scheme is provided, `https` is assumed.<br>* An HTTP GET on the URL must yield a [google.protobuf.Type][]<br>  value in binary format, or produce an error.<br>* Applications are allowed to cache lookup results based on the<br>  URL, or have them precompiled into a binary to avoid any<br>  lookup. Therefore, binary compatibility needs to be preserved<br>  on changes to types. (Use versioned type names to manage<br>  breaking changes.)<br><br>Note: this functionality is not currently available in the official<br>protobuf release, and it is not used for type URLs beginning with<br>type.googleapis.com.<br><br>Schemes other than `http`, `https` (or the empty scheme) might be<br>used with implementation specific semantics.|

<aside class="success">
This operation does not require authentication
</aside>

## CosmwasmWasmV1Code

<a id="opIdCosmwasmWasmV1Code"></a>

`GET /cosmwasm/wasm/v1/code/{codeId}`

*Code gets the binary code and metadata for a singe wasm code*

<h3 id="cosmwasmwasmv1code-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|codeId|path|string(uint64)|true|none|

> Example responses

> 200 Response

<h3 id="cosmwasmwasmv1code-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|Inline|
|default|Default|An unexpected error response.|Inline|

<h3 id="cosmwasmwasmv1code-responseschema">Response Schema</h3>

Status Code **200**

*QueryCodeResponse is the response type for the Query/Code RPC method*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» codeInfo|object|false|none|none|
|»» codeId|string(uint64)|false|none|none|
|»» creator|string|false|none|none|
|»» dataHash|string(byte)|false|none|none|
|» data|string(byte)|false|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int32)|false|none|none|
|» message|string|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|any|false|none|none|
|»» @type|string|false|none|A URL/resource name that uniquely identifies the type of the serialized<br>protocol buffer message. This string must contain at least<br>one "/" character. The last segment of the URL's path must represent<br>the fully qualified name of the type (as in<br>`path/google.protobuf.Duration`). The name should be in a canonical form<br>(e.g., leading "." is not accepted).<br><br>In practice, teams usually precompile into the binary all types that they<br>expect it to use in the context of Any. However, for URLs which use the<br>scheme `http`, `https`, or no scheme, one can optionally set up a type<br>server that maps type URLs to message definitions as follows:<br><br>* If no scheme is provided, `https` is assumed.<br>* An HTTP GET on the URL must yield a [google.protobuf.Type][]<br>  value in binary format, or produce an error.<br>* Applications are allowed to cache lookup results based on the<br>  URL, or have them precompiled into a binary to avoid any<br>  lookup. Therefore, binary compatibility needs to be preserved<br>  on changes to types. (Use versioned type names to manage<br>  breaking changes.)<br><br>Note: this functionality is not currently available in the official<br>protobuf release, and it is not used for type URLs beginning with<br>type.googleapis.com.<br><br>Schemes other than `http`, `https` (or the empty scheme) might be<br>used with implementation specific semantics.|

<aside class="success">
This operation does not require authentication
</aside>

## CosmwasmWasmV1ContractsByCode

<a id="opIdCosmwasmWasmV1ContractsByCode"></a>

`GET /cosmwasm/wasm/v1/code/{codeId}/contracts`

*ContractsByCode lists all smart contracts for a code id*

<h3 id="cosmwasmwasmv1contractsbycode-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|codeId|path|string(uint64)|true|none|
|pagination.key|query|string(byte)|false|key is a value returned in PageResponse.next_key to begin|
|pagination.offset|query|string(uint64)|false|offset is a numeric offset that can be used when key is unavailable.|
|pagination.limit|query|string(uint64)|false|limit is the total number of results to be returned in the result page.|
|pagination.countTotal|query|boolean|false|count_total is set to true  to indicate that the result set should include|
|pagination.reverse|query|boolean|false|reverse is set to true if results are to be returned in the descending order.|

#### Detailed descriptions

**pagination.key**: key is a value returned in PageResponse.next_key to begin
querying the next page most efficiently. Only one of offset or key
should be set.

**pagination.offset**: offset is a numeric offset that can be used when key is unavailable.
It is less efficient than using key. Only one of offset or key should
be set.

**pagination.limit**: limit is the total number of results to be returned in the result page.
If left empty it will default to a value to be set by each app.

**pagination.countTotal**: count_total is set to true  to indicate that the result set should include
a count of the total number of items available for pagination in UIs.
count_total is only respected when offset is used. It is ignored when key
is set.

**pagination.reverse**: reverse is set to true if results are to be returned in the descending order.

Since: cosmos-sdk 0.43

> Example responses

> 200 Response

<h3 id="cosmwasmwasmv1contractsbycode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|Inline|
|default|Default|An unexpected error response.|Inline|

<h3 id="cosmwasmwasmv1contractsbycode-responseschema">Response Schema</h3>

Status Code **200**

*QueryContractsByCodeResponse is the response type for the
Query/ContractsByCode RPC method*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» contracts|[string]|false|none|none|
|» pagination|object|false|none|pagination defines the pagination in the response.|
|»» nextKey|string(byte)|false|none|none|
|»» total|string(uint64)|false|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int32)|false|none|none|
|» message|string|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|any|false|none|none|
|»» @type|string|false|none|A URL/resource name that uniquely identifies the type of the serialized<br>protocol buffer message. This string must contain at least<br>one "/" character. The last segment of the URL's path must represent<br>the fully qualified name of the type (as in<br>`path/google.protobuf.Duration`). The name should be in a canonical form<br>(e.g., leading "." is not accepted).<br><br>In practice, teams usually precompile into the binary all types that they<br>expect it to use in the context of Any. However, for URLs which use the<br>scheme `http`, `https`, or no scheme, one can optionally set up a type<br>server that maps type URLs to message definitions as follows:<br><br>* If no scheme is provided, `https` is assumed.<br>* An HTTP GET on the URL must yield a [google.protobuf.Type][]<br>  value in binary format, or produce an error.<br>* Applications are allowed to cache lookup results based on the<br>  URL, or have them precompiled into a binary to avoid any<br>  lookup. Therefore, binary compatibility needs to be preserved<br>  on changes to types. (Use versioned type names to manage<br>  breaking changes.)<br><br>Note: this functionality is not currently available in the official<br>protobuf release, and it is not used for type URLs beginning with<br>type.googleapis.com.<br><br>Schemes other than `http`, `https` (or the empty scheme) might be<br>used with implementation specific semantics.|

<aside class="success">
This operation does not require authentication
</aside>

## CosmwasmWasmV1PinnedCodes

<a id="opIdCosmwasmWasmV1PinnedCodes"></a>

`GET /cosmwasm/wasm/v1/codes/pinned`

*PinnedCodes gets the pinned code ids*

<h3 id="cosmwasmwasmv1pinnedcodes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pagination.key|query|string(byte)|false|key is a value returned in PageResponse.next_key to begin|
|pagination.offset|query|string(uint64)|false|offset is a numeric offset that can be used when key is unavailable.|
|pagination.limit|query|string(uint64)|false|limit is the total number of results to be returned in the result page.|
|pagination.countTotal|query|boolean|false|count_total is set to true  to indicate that the result set should include|
|pagination.reverse|query|boolean|false|reverse is set to true if results are to be returned in the descending order.|

#### Detailed descriptions

**pagination.key**: key is a value returned in PageResponse.next_key to begin
querying the next page most efficiently. Only one of offset or key
should be set.

**pagination.offset**: offset is a numeric offset that can be used when key is unavailable.
It is less efficient than using key. Only one of offset or key should
be set.

**pagination.limit**: limit is the total number of results to be returned in the result page.
If left empty it will default to a value to be set by each app.

**pagination.countTotal**: count_total is set to true  to indicate that the result set should include
a count of the total number of items available for pagination in UIs.
count_total is only respected when offset is used. It is ignored when key
is set.

**pagination.reverse**: reverse is set to true if results are to be returned in the descending order.

Since: cosmos-sdk 0.43

> Example responses

> 200 Response

<h3 id="cosmwasmwasmv1pinnedcodes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|Inline|
|default|Default|An unexpected error response.|Inline|

<h3 id="cosmwasmwasmv1pinnedcodes-responseschema">Response Schema</h3>

Status Code **200**

*QueryPinnedCodesResponse is the response type for the
Query/PinnedCodes RPC method*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» codeIds|[string]|false|none|none|
|» pagination|object|false|none|pagination defines the pagination in the response.|
|»» nextKey|string(byte)|false|none|none|
|»» total|string(uint64)|false|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int32)|false|none|none|
|» message|string|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|any|false|none|none|
|»» @type|string|false|none|A URL/resource name that uniquely identifies the type of the serialized<br>protocol buffer message. This string must contain at least<br>one "/" character. The last segment of the URL's path must represent<br>the fully qualified name of the type (as in<br>`path/google.protobuf.Duration`). The name should be in a canonical form<br>(e.g., leading "." is not accepted).<br><br>In practice, teams usually precompile into the binary all types that they<br>expect it to use in the context of Any. However, for URLs which use the<br>scheme `http`, `https`, or no scheme, one can optionally set up a type<br>server that maps type URLs to message definitions as follows:<br><br>* If no scheme is provided, `https` is assumed.<br>* An HTTP GET on the URL must yield a [google.protobuf.Type][]<br>  value in binary format, or produce an error.<br>* Applications are allowed to cache lookup results based on the<br>  URL, or have them precompiled into a binary to avoid any<br>  lookup. Therefore, binary compatibility needs to be preserved<br>  on changes to types. (Use versioned type names to manage<br>  breaking changes.)<br><br>Note: this functionality is not currently available in the official<br>protobuf release, and it is not used for type URLs beginning with<br>type.googleapis.com.<br><br>Schemes other than `http`, `https` (or the empty scheme) might be<br>used with implementation specific semantics.|

<aside class="success">
This operation does not require authentication
</aside>

## CosmwasmWasmV1ContractInfo

<a id="opIdCosmwasmWasmV1ContractInfo"></a>

`GET /cosmwasm/wasm/v1/contract/{address}`

*ContractInfo gets the contract meta data*

<h3 id="cosmwasmwasmv1contractinfo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|address|path|string|true|address is the address of the contract to query|

> Example responses

> 200 Response

<h3 id="cosmwasmwasmv1contractinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|Inline|
|default|Default|An unexpected error response.|Inline|

<h3 id="cosmwasmwasmv1contractinfo-responseschema">Response Schema</h3>

Status Code **200**

*QueryContractInfoResponse is the response type for the Query/ContractInfo RPC
method*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» address|string|false|none|none|
|» contractInfo|object|false|none|none|
|»» codeId|string(uint64)|false|none|none|
|»» creator|string|false|none|none|
|»» admin|string|false|none|none|
|»» label|string|false|none|Label is optional metadata to be stored with a contract instance.|
|»» created|object|false|none|AbsoluteTxPosition is a unique transaction position that allows for global<br>ordering of transactions.|
|»»» blockHeight|string(uint64)|false|none|none|
|»»» txIndex|string(uint64)|false|none|none|
|»» ibcPortId|string|false|none|none|
|»» extension|object|false|none|`Any` contains an arbitrary serialized protocol buffer message along with a<br>URL that describes the type of the serialized message.<br><br>Protobuf library provides support to pack/unpack Any values in the form<br>of utility functions or additional generated methods of the Any type.<br><br>Example 1: Pack and unpack a message in C++.<br><br>    Foo foo = ...;<br>    Any any;<br>    any.PackFrom(foo);<br>    ...<br>    if (any.UnpackTo(&foo)) {<br>      ...<br>    }<br><br>Example 2: Pack and unpack a message in Java.<br><br>    Foo foo = ...;<br>    Any any = Any.pack(foo);<br>    ...<br>    if (any.is(Foo.class)) {<br>      foo = any.unpack(Foo.class);<br>    }<br><br> Example 3: Pack and unpack a message in Python.<br><br>    foo = Foo(...)<br>    any = Any()<br>    any.Pack(foo)<br>    ...<br>    if any.Is(Foo.DESCRIPTOR):<br>      any.Unpack(foo)<br>      ...<br><br> Example 4: Pack and unpack a message in Go<br><br>     foo := &pb.Foo{...}<br>     any, err := anypb.New(foo)<br>     if err != nil {<br>       ...<br>     }<br>     ...<br>     foo := &pb.Foo{}<br>     if err := any.UnmarshalTo(foo); err != nil {<br>       ...<br>     }<br><br>The pack methods provided by protobuf library will by default use<br>'type.googleapis.com/full.type.name' as the type URL and the unpack<br>methods only use the fully qualified type name after the last '/'<br>in the type URL, for example "foo.bar.com/x/y.z" will yield type<br>name "y.z".<br><br><br>JSON<br>====<br>The JSON representation of an `Any` value uses the regular<br>representation of the deserialized, embedded message, with an<br>additional field `@type` which contains the type URL. Example:<br><br>    package google.profile;<br>    message Person {<br>      string first_name = 1;<br>      string last_name = 2;<br>    }<br><br>    {<br>      "@type": "type.googleapis.com/google.profile.Person",<br>      "firstName": <string>,<br>      "lastName": <string><br>    }<br><br>If the embedded message type is well-known and has a custom JSON<br>representation, that representation will be embedded adding a field<br>`value` which holds the custom JSON in addition to the `@type`<br>field. Example (for message [google.protobuf.Duration][]):<br><br>    {<br>      "@type": "type.googleapis.com/google.protobuf.Duration",<br>      "value": "1.212s"<br>    }|
|»»» **additionalProperties**|any|false|none|none|
|»»» @type|string|false|none|A URL/resource name that uniquely identifies the type of the serialized<br>protocol buffer message. This string must contain at least<br>one "/" character. The last segment of the URL's path must represent<br>the fully qualified name of the type (as in<br>`path/google.protobuf.Duration`). The name should be in a canonical form<br>(e.g., leading "." is not accepted).<br><br>In practice, teams usually precompile into the binary all types that they<br>expect it to use in the context of Any. However, for URLs which use the<br>scheme `http`, `https`, or no scheme, one can optionally set up a type<br>server that maps type URLs to message definitions as follows:<br><br>* If no scheme is provided, `https` is assumed.<br>* An HTTP GET on the URL must yield a [google.protobuf.Type][]<br>  value in binary format, or produce an error.<br>* Applications are allowed to cache lookup results based on the<br>  URL, or have them precompiled into a binary to avoid any<br>  lookup. Therefore, binary compatibility needs to be preserved<br>  on changes to types. (Use versioned type names to manage<br>  breaking changes.)<br><br>Note: this functionality is not currently available in the official<br>protobuf release, and it is not used for type URLs beginning with<br>type.googleapis.com.<br><br>Schemes other than `http`, `https` (or the empty scheme) might be<br>used with implementation specific semantics.|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int32)|false|none|none|
|» message|string|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|any|false|none|none|
|»» @type|string|false|none|A URL/resource name that uniquely identifies the type of the serialized<br>protocol buffer message. This string must contain at least<br>one "/" character. The last segment of the URL's path must represent<br>the fully qualified name of the type (as in<br>`path/google.protobuf.Duration`). The name should be in a canonical form<br>(e.g., leading "." is not accepted).<br><br>In practice, teams usually precompile into the binary all types that they<br>expect it to use in the context of Any. However, for URLs which use the<br>scheme `http`, `https`, or no scheme, one can optionally set up a type<br>server that maps type URLs to message definitions as follows:<br><br>* If no scheme is provided, `https` is assumed.<br>* An HTTP GET on the URL must yield a [google.protobuf.Type][]<br>  value in binary format, or produce an error.<br>* Applications are allowed to cache lookup results based on the<br>  URL, or have them precompiled into a binary to avoid any<br>  lookup. Therefore, binary compatibility needs to be preserved<br>  on changes to types. (Use versioned type names to manage<br>  breaking changes.)<br><br>Note: this functionality is not currently available in the official<br>protobuf release, and it is not used for type URLs beginning with<br>type.googleapis.com.<br><br>Schemes other than `http`, `https` (or the empty scheme) might be<br>used with implementation specific semantics.|

<aside class="success">
This operation does not require authentication
</aside>

## CosmwasmWasmV1ContractHistory

<a id="opIdCosmwasmWasmV1ContractHistory"></a>

`GET /cosmwasm/wasm/v1/contract/{address}/history`

*ContractHistory gets the contract code history*

<h3 id="cosmwasmwasmv1contracthistory-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|address|path|string|true|address is the address of the contract to query|
|pagination.key|query|string(byte)|false|key is a value returned in PageResponse.next_key to begin|
|pagination.offset|query|string(uint64)|false|offset is a numeric offset that can be used when key is unavailable.|
|pagination.limit|query|string(uint64)|false|limit is the total number of results to be returned in the result page.|
|pagination.countTotal|query|boolean|false|count_total is set to true  to indicate that the result set should include|
|pagination.reverse|query|boolean|false|reverse is set to true if results are to be returned in the descending order.|

#### Detailed descriptions

**pagination.key**: key is a value returned in PageResponse.next_key to begin
querying the next page most efficiently. Only one of offset or key
should be set.

**pagination.offset**: offset is a numeric offset that can be used when key is unavailable.
It is less efficient than using key. Only one of offset or key should
be set.

**pagination.limit**: limit is the total number of results to be returned in the result page.
If left empty it will default to a value to be set by each app.

**pagination.countTotal**: count_total is set to true  to indicate that the result set should include
a count of the total number of items available for pagination in UIs.
count_total is only respected when offset is used. It is ignored when key
is set.

**pagination.reverse**: reverse is set to true if results are to be returned in the descending order.

Since: cosmos-sdk 0.43

> Example responses

> 200 Response

<h3 id="cosmwasmwasmv1contracthistory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|Inline|
|default|Default|An unexpected error response.|Inline|

<h3 id="cosmwasmwasmv1contracthistory-responseschema">Response Schema</h3>

Status Code **200**

*QueryContractHistoryResponse is the response type for the
Query/ContractHistory RPC method*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» entries|[object]|false|none|none|
|»» operation|string|false|none|- CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED: ContractCodeHistoryOperationTypeUnspecified placeholder for empty value<br> - CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT: ContractCodeHistoryOperationTypeInit on chain contract instantiation<br> - CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE: ContractCodeHistoryOperationTypeMigrate code migration<br> - CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS: ContractCodeHistoryOperationTypeGenesis based on genesis data|
|»» codeId|string(uint64)|false|none|none|
|»» updated|object|false|none|Updated Tx position when the operation was executed.|
|»»» blockHeight|string(uint64)|false|none|none|
|»»» txIndex|string(uint64)|false|none|none|
|»» msg|string(byte)|false|none|none|
|» pagination|object|false|none|pagination defines the pagination in the response.|
|»» nextKey|string(byte)|false|none|none|
|»» total|string(uint64)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|operation|CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED|
|operation|CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT|
|operation|CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE|
|operation|CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int32)|false|none|none|
|» message|string|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|any|false|none|none|
|»» @type|string|false|none|A URL/resource name that uniquely identifies the type of the serialized<br>protocol buffer message. This string must contain at least<br>one "/" character. The last segment of the URL's path must represent<br>the fully qualified name of the type (as in<br>`path/google.protobuf.Duration`). The name should be in a canonical form<br>(e.g., leading "." is not accepted).<br><br>In practice, teams usually precompile into the binary all types that they<br>expect it to use in the context of Any. However, for URLs which use the<br>scheme `http`, `https`, or no scheme, one can optionally set up a type<br>server that maps type URLs to message definitions as follows:<br><br>* If no scheme is provided, `https` is assumed.<br>* An HTTP GET on the URL must yield a [google.protobuf.Type][]<br>  value in binary format, or produce an error.<br>* Applications are allowed to cache lookup results based on the<br>  URL, or have them precompiled into a binary to avoid any<br>  lookup. Therefore, binary compatibility needs to be preserved<br>  on changes to types. (Use versioned type names to manage<br>  breaking changes.)<br><br>Note: this functionality is not currently available in the official<br>protobuf release, and it is not used for type URLs beginning with<br>type.googleapis.com.<br><br>Schemes other than `http`, `https` (or the empty scheme) might be<br>used with implementation specific semantics.|

<aside class="success">
This operation does not require authentication
</aside>

## CosmwasmWasmV1AllContractState

<a id="opIdCosmwasmWasmV1AllContractState"></a>

`GET /cosmwasm/wasm/v1/contract/{address}/state`

*AllContractState gets all raw store data for a single contract*

<h3 id="cosmwasmwasmv1allcontractstate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|address|path|string|true|address is the address of the contract|
|pagination.key|query|string(byte)|false|key is a value returned in PageResponse.next_key to begin|
|pagination.offset|query|string(uint64)|false|offset is a numeric offset that can be used when key is unavailable.|
|pagination.limit|query|string(uint64)|false|limit is the total number of results to be returned in the result page.|
|pagination.countTotal|query|boolean|false|count_total is set to true  to indicate that the result set should include|
|pagination.reverse|query|boolean|false|reverse is set to true if results are to be returned in the descending order.|

#### Detailed descriptions

**pagination.key**: key is a value returned in PageResponse.next_key to begin
querying the next page most efficiently. Only one of offset or key
should be set.

**pagination.offset**: offset is a numeric offset that can be used when key is unavailable.
It is less efficient than using key. Only one of offset or key should
be set.

**pagination.limit**: limit is the total number of results to be returned in the result page.
If left empty it will default to a value to be set by each app.

**pagination.countTotal**: count_total is set to true  to indicate that the result set should include
a count of the total number of items available for pagination in UIs.
count_total is only respected when offset is used. It is ignored when key
is set.

**pagination.reverse**: reverse is set to true if results are to be returned in the descending order.

Since: cosmos-sdk 0.43

> Example responses

> 200 Response

<h3 id="cosmwasmwasmv1allcontractstate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|Inline|
|default|Default|An unexpected error response.|Inline|

<h3 id="cosmwasmwasmv1allcontractstate-responseschema">Response Schema</h3>

Status Code **200**

*QueryAllContractStateResponse is the response type for the
Query/AllContractState RPC method*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» models|[object]|false|none|none|
|»» Model is a struct that holds a KV pair|object|false|none|none|
|»»» key|string(byte)|false|none|none|
|»»» value|string(byte)|false|none|none|
|» pagination|object|false|none|pagination defines the pagination in the response.|
|»» nextKey|string(byte)|false|none|none|
|»» total|string(uint64)|false|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int32)|false|none|none|
|» message|string|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|any|false|none|none|
|»» @type|string|false|none|A URL/resource name that uniquely identifies the type of the serialized<br>protocol buffer message. This string must contain at least<br>one "/" character. The last segment of the URL's path must represent<br>the fully qualified name of the type (as in<br>`path/google.protobuf.Duration`). The name should be in a canonical form<br>(e.g., leading "." is not accepted).<br><br>In practice, teams usually precompile into the binary all types that they<br>expect it to use in the context of Any. However, for URLs which use the<br>scheme `http`, `https`, or no scheme, one can optionally set up a type<br>server that maps type URLs to message definitions as follows:<br><br>* If no scheme is provided, `https` is assumed.<br>* An HTTP GET on the URL must yield a [google.protobuf.Type][]<br>  value in binary format, or produce an error.<br>* Applications are allowed to cache lookup results based on the<br>  URL, or have them precompiled into a binary to avoid any<br>  lookup. Therefore, binary compatibility needs to be preserved<br>  on changes to types. (Use versioned type names to manage<br>  breaking changes.)<br><br>Note: this functionality is not currently available in the official<br>protobuf release, and it is not used for type URLs beginning with<br>type.googleapis.com.<br><br>Schemes other than `http`, `https` (or the empty scheme) might be<br>used with implementation specific semantics.|

<aside class="success">
This operation does not require authentication
</aside>

## CosmwasmWasmV1RawContractState

<a id="opIdCosmwasmWasmV1RawContractState"></a>

`GET /wasm/v1/contract/{address}/raw/{queryData}`

*RawContractState gets single key from the raw store data of a contract*

<h3 id="cosmwasmwasmv1rawcontractstate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|address|path|string|true|address is the address of the contract|
|queryData|path|string(byte)|true|none|

> Example responses

> 200 Response

<h3 id="cosmwasmwasmv1rawcontractstate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|Inline|
|default|Default|An unexpected error response.|Inline|

<h3 id="cosmwasmwasmv1rawcontractstate-responseschema">Response Schema</h3>

Status Code **200**

*QueryRawContractStateResponse is the response type for the
Query/RawContractState RPC method*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» data|string(byte)|false|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int32)|false|none|none|
|» message|string|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|any|false|none|none|
|»» @type|string|false|none|A URL/resource name that uniquely identifies the type of the serialized<br>protocol buffer message. This string must contain at least<br>one "/" character. The last segment of the URL's path must represent<br>the fully qualified name of the type (as in<br>`path/google.protobuf.Duration`). The name should be in a canonical form<br>(e.g., leading "." is not accepted).<br><br>In practice, teams usually precompile into the binary all types that they<br>expect it to use in the context of Any. However, for URLs which use the<br>scheme `http`, `https`, or no scheme, one can optionally set up a type<br>server that maps type URLs to message definitions as follows:<br><br>* If no scheme is provided, `https` is assumed.<br>* An HTTP GET on the URL must yield a [google.protobuf.Type][]<br>  value in binary format, or produce an error.<br>* Applications are allowed to cache lookup results based on the<br>  URL, or have them precompiled into a binary to avoid any<br>  lookup. Therefore, binary compatibility needs to be preserved<br>  on changes to types. (Use versioned type names to manage<br>  breaking changes.)<br><br>Note: this functionality is not currently available in the official<br>protobuf release, and it is not used for type URLs beginning with<br>type.googleapis.com.<br><br>Schemes other than `http`, `https` (or the empty scheme) might be<br>used with implementation specific semantics.|

<aside class="success">
This operation does not require authentication
</aside>

## CosmwasmWasmV1SmartContractState

<a id="opIdCosmwasmWasmV1SmartContractState"></a>

`GET /wasm/v1/contract/{address}/smart/{queryData}`

*SmartContractState get smart query result from the contract*

<h3 id="cosmwasmwasmv1smartcontractstate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|address|path|string|true|address is the address of the contract|
|queryData|path|string(byte)|true|QueryData contains the query data passed to the contract|

> Example responses

> 200 Response

<h3 id="cosmwasmwasmv1smartcontractstate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|Inline|
|default|Default|An unexpected error response.|Inline|

<h3 id="cosmwasmwasmv1smartcontractstate-responseschema">Response Schema</h3>

Status Code **200**

*QuerySmartContractStateResponse is the response type for the
Query/SmartContractState RPC method*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» data|string(byte)|false|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int32)|false|none|none|
|» message|string|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|any|false|none|none|
|»» @type|string|false|none|A URL/resource name that uniquely identifies the type of the serialized<br>protocol buffer message. This string must contain at least<br>one "/" character. The last segment of the URL's path must represent<br>the fully qualified name of the type (as in<br>`path/google.protobuf.Duration`). The name should be in a canonical form<br>(e.g., leading "." is not accepted).<br><br>In practice, teams usually precompile into the binary all types that they<br>expect it to use in the context of Any. However, for URLs which use the<br>scheme `http`, `https`, or no scheme, one can optionally set up a type<br>server that maps type URLs to message definitions as follows:<br><br>* If no scheme is provided, `https` is assumed.<br>* An HTTP GET on the URL must yield a [google.protobuf.Type][]<br>  value in binary format, or produce an error.<br>* Applications are allowed to cache lookup results based on the<br>  URL, or have them precompiled into a binary to avoid any<br>  lookup. Therefore, binary compatibility needs to be preserved<br>  on changes to types. (Use versioned type names to manage<br>  breaking changes.)<br><br>Note: this functionality is not currently available in the official<br>protobuf release, and it is not used for type URLs beginning with<br>type.googleapis.com.<br><br>Schemes other than `http`, `https` (or the empty scheme) might be<br>used with implementation specific semantics.|

<aside class="success">
This operation does not require authentication
</aside>

## IbcApplicationsTransferV1DenomTraces

<a id="opIdIbcApplicationsTransferV1DenomTraces"></a>

`GET /ibc/apps/transfer/v1/denom_traces`

*DenomTraces queries all denomination traces.*

<h3 id="ibcapplicationstransferv1denomtraces-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pagination.key|query|string(byte)|false|key is a value returned in PageResponse.next_key to begin|
|pagination.offset|query|string(uint64)|false|offset is a numeric offset that can be used when key is unavailable.|
|pagination.limit|query|string(uint64)|false|limit is the total number of results to be returned in the result page.|
|pagination.countTotal|query|boolean|false|count_total is set to true  to indicate that the result set should include|

#### Detailed descriptions

**pagination.key**: key is a value returned in PageResponse.next_key to begin
querying the next page most efficiently. Only one of offset or key
should be set.

**pagination.offset**: offset is a numeric offset that can be used when key is unavailable.
It is less efficient than using key. Only one of offset or key should
be set.

**pagination.limit**: limit is the total number of results to be returned in the result page.
If left empty it will default to a value to be set by each app.

**pagination.countTotal**: count_total is set to true  to indicate that the result set should include
a count of the total number of items available for pagination in UIs.
count_total is only respected when offset is used. It is ignored when key
is set.

> Example responses

> 200 Response

<h3 id="ibcapplicationstransferv1denomtraces-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|Inline|
|default|Default|An unexpected error response.|Inline|

<h3 id="ibcapplicationstransferv1denomtraces-responseschema">Response Schema</h3>

Status Code **200**

*QueryConnectionsResponse is the response type for the Query/DenomTraces RPC
method.*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» denomTraces|[object]|false|none|denom_traces returns all denominations trace information.|
|»» path|string|false|none|path defines the chain of port/channel identifiers used for tracing the<br>source of the fungible token.|
|»» baseDenom|string|false|none|base denomination of the relayed fungible token.|
|» pagination|object|false|none|pagination defines the pagination in the response.|
|»» nextKey|string(byte)|false|none|none|
|»» total|string(uint64)|false|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int32)|false|none|none|
|» message|string|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|any|false|none|none|
|»» @type|string|false|none|A URL/resource name that uniquely identifies the type of the serialized<br>protocol buffer message. This string must contain at least<br>one "/" character. The last segment of the URL's path must represent<br>the fully qualified name of the type (as in<br>`path/google.protobuf.Duration`). The name should be in a canonical form<br>(e.g., leading "." is not accepted).<br><br>In practice, teams usually precompile into the binary all types that they<br>expect it to use in the context of Any. However, for URLs which use the<br>scheme `http`, `https`, or no scheme, one can optionally set up a type<br>server that maps type URLs to message definitions as follows:<br><br>* If no scheme is provided, `https` is assumed.<br>* An HTTP GET on the URL must yield a [google.protobuf.Type][]<br>  value in binary format, or produce an error.<br>* Applications are allowed to cache lookup results based on the<br>  URL, or have them precompiled into a binary to avoid any<br>  lookup. Therefore, binary compatibility needs to be preserved<br>  on changes to types. (Use versioned type names to manage<br>  breaking changes.)<br><br>Note: this functionality is not currently available in the official<br>protobuf release, and it is not used for type URLs beginning with<br>type.googleapis.com.<br><br>Schemes other than `http`, `https` (or the empty scheme) might be<br>used with implementation specific semantics.|

<aside class="success">
This operation does not require authentication
</aside>

## IbcApplicationsTransferV1DenomTrace

<a id="opIdIbcApplicationsTransferV1DenomTrace"></a>

`GET /ibc/apps/transfer/v1/denom_traces/{hash}`

*DenomTrace queries a denomination trace information.*

<h3 id="ibcapplicationstransferv1denomtrace-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|hash|path|string|true|hash (in hex format) of the denomination trace information.|

> Example responses

> 200 Response

<h3 id="ibcapplicationstransferv1denomtrace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|Inline|
|default|Default|An unexpected error response.|Inline|

<h3 id="ibcapplicationstransferv1denomtrace-responseschema">Response Schema</h3>

Status Code **200**

*QueryDenomTraceResponse is the response type for the Query/DenomTrace RPC
method.*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» denomTrace|object|false|none|DenomTrace contains the base denomination for ICS20 fungible tokens and the<br>source tracing information path.|
|»» path|string|false|none|path defines the chain of port/channel identifiers used for tracing the<br>source of the fungible token.|
|»» baseDenom|string|false|none|base denomination of the relayed fungible token.|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int32)|false|none|none|
|» message|string|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|any|false|none|none|
|»» @type|string|false|none|A URL/resource name that uniquely identifies the type of the serialized<br>protocol buffer message. This string must contain at least<br>one "/" character. The last segment of the URL's path must represent<br>the fully qualified name of the type (as in<br>`path/google.protobuf.Duration`). The name should be in a canonical form<br>(e.g., leading "." is not accepted).<br><br>In practice, teams usually precompile into the binary all types that they<br>expect it to use in the context of Any. However, for URLs which use the<br>scheme `http`, `https`, or no scheme, one can optionally set up a type<br>server that maps type URLs to message definitions as follows:<br><br>* If no scheme is provided, `https` is assumed.<br>* An HTTP GET on the URL must yield a [google.protobuf.Type][]<br>  value in binary format, or produce an error.<br>* Applications are allowed to cache lookup results based on the<br>  URL, or have them precompiled into a binary to avoid any<br>  lookup. Therefore, binary compatibility needs to be preserved<br>  on changes to types. (Use versioned type names to manage<br>  breaking changes.)<br><br>Note: this functionality is not currently available in the official<br>protobuf release, and it is not used for type URLs beginning with<br>type.googleapis.com.<br><br>Schemes other than `http`, `https` (or the empty scheme) might be<br>used with implementation specific semantics.|

<aside class="success">
This operation does not require authentication
</aside>

## IbcApplicationsTransferV1Params

<a id="opIdIbcApplicationsTransferV1Params"></a>

`GET /ibc/apps/transfer/v1/params`

*Params queries all parameters of the ibc-transfer module.*

> Example responses

> 200 Response

<h3 id="ibcapplicationstransferv1params-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful response.|Inline|
|default|Default|An unexpected error response.|Inline|

<h3 id="ibcapplicationstransferv1params-responseschema">Response Schema</h3>

Status Code **200**

*QueryParamsResponse is the response type for the Query/Params RPC method.*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» params|object|false|none|params defines the parameters of the module.|
|»» sendEnabled|boolean|false|none|send_enabled enables or disables all cross-chain token transfers from this<br>chain.|
|»» receiveEnabled|boolean|false|none|receive_enabled enables or disables all cross-chain token transfers to this<br>chain.|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int32)|false|none|none|
|» message|string|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|any|false|none|none|
|»» @type|string|false|none|A URL/resource name that uniquely identifies the type of the serialized<br>protocol buffer message. This string must contain at least<br>one "/" character. The last segment of the URL's path must represent<br>the fully qualified name of the type (as in<br>`path/google.protobuf.Duration`). The name should be in a canonical form<br>(e.g., leading "." is not accepted).<br><br>In practice, teams usually precompile into the binary all types that they<br>expect it to use in the context of Any. However, for URLs which use the<br>scheme `http`, `https`, or no scheme, one can optionally set up a type<br>server that maps type URLs to message definitions as follows:<br><br>* If no scheme is provided, `https` is assumed.<br>* An HTTP GET on the URL must yield a [google.protobuf.Type][]<br>  value in binary format, or produce an error.<br>* Applications are allowed to cache lookup results based on the<br>  URL, or have them precompiled into a binary to avoid any<br>  lookup. Therefore, binary compatibility needs to be preserved<br>  on changes to types. (Use versioned type names to manage<br>  breaking changes.)<br><br>Note: this functionality is not currently available in the official<br>protobuf release, and it is not used for type URLs beginning with<br>type.googleapis.com.<br><br>Schemes other than `http`, `https` (or the empty scheme) might be<br>used with implementation specific semantics.|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_sei-protocol.seichain.dex.LongBook">sei-protocol.seichain.dex.LongBook</h2>
<!-- backwards compatibility -->
<a id="schemasei-protocol.seichain.dex.longbook"></a>
<a id="schema_sei-protocol.seichain.dex.LongBook"></a>
<a id="tocSsei-protocol.seichain.dex.longbook"></a>
<a id="tocssei-protocol.seichain.dex.longbook"></a>

```json
{
  "id": "string",
  "entry": {
    "price": "string",
    "quantity": "string",
    "allocationCreator": [
      "string"
    ],
    "allocation": [
      "string"
    ],
    "priceDenom": "string",
    "assetDenom": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uint64)|false|none|none|
|entry|object|false|none|none|
|» price|string(uint64)|false|none|none|
|» quantity|string(uint64)|false|none|none|
|» allocationCreator|[string]|false|none|none|
|» allocation|[string]|false|none|none|
|» priceDenom|string|false|none|none|
|» assetDenom|string|false|none|none|

<h2 id="tocS_sei-protocol.seichain.dex.MsgCancelAllResponse">sei-protocol.seichain.dex.MsgCancelAllResponse</h2>
<!-- backwards compatibility -->
<a id="schemasei-protocol.seichain.dex.msgcancelallresponse"></a>
<a id="schema_sei-protocol.seichain.dex.MsgCancelAllResponse"></a>
<a id="tocSsei-protocol.seichain.dex.msgcancelallresponse"></a>
<a id="tocssei-protocol.seichain.dex.msgcancelallresponse"></a>

```json
{}

```

### Properties

*None*

<h2 id="tocS_sei-protocol.seichain.dex.MsgCancelBuyResponse">sei-protocol.seichain.dex.MsgCancelBuyResponse</h2>
<!-- backwards compatibility -->
<a id="schemasei-protocol.seichain.dex.msgcancelbuyresponse"></a>
<a id="schema_sei-protocol.seichain.dex.MsgCancelBuyResponse"></a>
<a id="tocSsei-protocol.seichain.dex.msgcancelbuyresponse"></a>
<a id="tocssei-protocol.seichain.dex.msgcancelbuyresponse"></a>

```json
{}

```

### Properties

*None*

<h2 id="tocS_sei-protocol.seichain.dex.MsgCancelSellResponse">sei-protocol.seichain.dex.MsgCancelSellResponse</h2>
<!-- backwards compatibility -->
<a id="schemasei-protocol.seichain.dex.msgcancelsellresponse"></a>
<a id="schema_sei-protocol.seichain.dex.MsgCancelSellResponse"></a>
<a id="tocSsei-protocol.seichain.dex.msgcancelsellresponse"></a>
<a id="tocssei-protocol.seichain.dex.msgcancelsellresponse"></a>

```json
{}

```

### Properties

*None*

<h2 id="tocS_sei-protocol.seichain.dex.MsgLimitBuyResponse">sei-protocol.seichain.dex.MsgLimitBuyResponse</h2>
<!-- backwards compatibility -->
<a id="schemasei-protocol.seichain.dex.msglimitbuyresponse"></a>
<a id="schema_sei-protocol.seichain.dex.MsgLimitBuyResponse"></a>
<a id="tocSsei-protocol.seichain.dex.msglimitbuyresponse"></a>
<a id="tocssei-protocol.seichain.dex.msglimitbuyresponse"></a>

```json
{}

```

### Properties

*None*

<h2 id="tocS_sei-protocol.seichain.dex.MsgLimitSellResponse">sei-protocol.seichain.dex.MsgLimitSellResponse</h2>
<!-- backwards compatibility -->
<a id="schemasei-protocol.seichain.dex.msglimitsellresponse"></a>
<a id="schema_sei-protocol.seichain.dex.MsgLimitSellResponse"></a>
<a id="tocSsei-protocol.seichain.dex.msglimitsellresponse"></a>
<a id="tocssei-protocol.seichain.dex.msglimitsellresponse"></a>

```json
{}

```

### Properties

*None*

<h2 id="tocS_sei-protocol.seichain.dex.MsgMarketBuyResponse">sei-protocol.seichain.dex.MsgMarketBuyResponse</h2>
<!-- backwards compatibility -->
<a id="schemasei-protocol.seichain.dex.msgmarketbuyresponse"></a>
<a id="schema_sei-protocol.seichain.dex.MsgMarketBuyResponse"></a>
<a id="tocSsei-protocol.seichain.dex.msgmarketbuyresponse"></a>
<a id="tocssei-protocol.seichain.dex.msgmarketbuyresponse"></a>

```json
{}

```

### Properties

*None*

<h2 id="tocS_sei-protocol.seichain.dex.MsgMarketSellResponse">sei-protocol.seichain.dex.MsgMarketSellResponse</h2>
<!-- backwards compatibility -->
<a id="schemasei-protocol.seichain.dex.msgmarketsellresponse"></a>
<a id="schema_sei-protocol.seichain.dex.MsgMarketSellResponse"></a>
<a id="tocSsei-protocol.seichain.dex.msgmarketsellresponse"></a>
<a id="tocssei-protocol.seichain.dex.msgmarketsellresponse"></a>

```json
{}

```

### Properties

*None*

<h2 id="tocS_sei-protocol.seichain.dex.OrderEntry">sei-protocol.seichain.dex.OrderEntry</h2>
<!-- backwards compatibility -->
<a id="schemasei-protocol.seichain.dex.orderentry"></a>
<a id="schema_sei-protocol.seichain.dex.OrderEntry"></a>
<a id="tocSsei-protocol.seichain.dex.orderentry"></a>
<a id="tocssei-protocol.seichain.dex.orderentry"></a>

```json
{
  "price": "string",
  "quantity": "string",
  "allocationCreator": [
    "string"
  ],
  "allocation": [
    "string"
  ],
  "priceDenom": "string",
  "assetDenom": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|price|string(uint64)|false|none|none|
|quantity|string(uint64)|false|none|none|
|allocationCreator|[string]|false|none|none|
|allocation|[string]|false|none|none|
|priceDenom|string|false|none|none|
|assetDenom|string|false|none|none|

<h2 id="tocS_sei-protocol.seichain.dex.Params">sei-protocol.seichain.dex.Params</h2>
<!-- backwards compatibility -->
<a id="schemasei-protocol.seichain.dex.params"></a>
<a id="schema_sei-protocol.seichain.dex.Params"></a>
<a id="tocSsei-protocol.seichain.dex.params"></a>
<a id="tocssei-protocol.seichain.dex.params"></a>

```json
{}

```

Params defines the parameters for the module.

### Properties

*None*

<h2 id="tocS_sei-protocol.seichain.dex.QueryAllLongBookResponse">sei-protocol.seichain.dex.QueryAllLongBookResponse</h2>
<!-- backwards compatibility -->
<a id="schemasei-protocol.seichain.dex.queryalllongbookresponse"></a>
<a id="schema_sei-protocol.seichain.dex.QueryAllLongBookResponse"></a>
<a id="tocSsei-protocol.seichain.dex.queryalllongbookresponse"></a>
<a id="tocssei-protocol.seichain.dex.queryalllongbookresponse"></a>

```json
{
  "LongBook": [
    {
      "id": "string",
      "entry": {
        "price": "string",
        "quantity": "string",
        "allocationCreator": [
          "string"
        ],
        "allocation": [
          "string"
        ],
        "priceDenom": "string",
        "assetDenom": "string"
      }
    }
  ],
  "pagination": {
    "nextKey": "string",
    "total": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LongBook|[object]|false|none|none|
|» id|string(uint64)|false|none|none|
|» entry|object|false|none|none|
|»» price|string(uint64)|false|none|none|
|»» quantity|string(uint64)|false|none|none|
|»» allocationCreator|[string]|false|none|none|
|»» allocation|[string]|false|none|none|
|»» priceDenom|string|false|none|none|
|»» assetDenom|string|false|none|none|
|pagination|object|false|none|PageResponse is to be embedded in gRPC response messages where the<br>corresponding request message has used PageRequest.<br><br> message SomeResponse {<br>         repeated Bar results = 1;<br>         PageResponse page = 2;<br> }|
|» nextKey|string(byte)|false|none|none|
|» total|string(uint64)|false|none|none|

<h2 id="tocS_sei-protocol.seichain.dex.QueryAllShortBookResponse">sei-protocol.seichain.dex.QueryAllShortBookResponse</h2>
<!-- backwards compatibility -->
<a id="schemasei-protocol.seichain.dex.queryallshortbookresponse"></a>
<a id="schema_sei-protocol.seichain.dex.QueryAllShortBookResponse"></a>
<a id="tocSsei-protocol.seichain.dex.queryallshortbookresponse"></a>
<a id="tocssei-protocol.seichain.dex.queryallshortbookresponse"></a>

```json
{
  "ShortBook": [
    {
      "id": "string",
      "entry": {
        "price": "string",
        "quantity": "string",
        "allocationCreator": [
          "string"
        ],
        "allocation": [
          "string"
        ],
        "priceDenom": "string",
        "assetDenom": "string"
      }
    }
  ],
  "pagination": {
    "nextKey": "string",
    "total": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ShortBook|[object]|false|none|none|
|» id|string(uint64)|false|none|none|
|» entry|object|false|none|none|
|»» price|string(uint64)|false|none|none|
|»» quantity|string(uint64)|false|none|none|
|»» allocationCreator|[string]|false|none|none|
|»» allocation|[string]|false|none|none|
|»» priceDenom|string|false|none|none|
|»» assetDenom|string|false|none|none|
|pagination|object|false|none|PageResponse is to be embedded in gRPC response messages where the<br>corresponding request message has used PageRequest.<br><br> message SomeResponse {<br>         repeated Bar results = 1;<br>         PageResponse page = 2;<br> }|
|» nextKey|string(byte)|false|none|none|
|» total|string(uint64)|false|none|none|

<h2 id="tocS_sei-protocol.seichain.dex.QueryGetLongBookResponse">sei-protocol.seichain.dex.QueryGetLongBookResponse</h2>
<!-- backwards compatibility -->
<a id="schemasei-protocol.seichain.dex.querygetlongbookresponse"></a>
<a id="schema_sei-protocol.seichain.dex.QueryGetLongBookResponse"></a>
<a id="tocSsei-protocol.seichain.dex.querygetlongbookresponse"></a>
<a id="tocssei-protocol.seichain.dex.querygetlongbookresponse"></a>

```json
{
  "LongBook": {
    "id": "string",
    "entry": {
      "price": "string",
      "quantity": "string",
      "allocationCreator": [
        "string"
      ],
      "allocation": [
        "string"
      ],
      "priceDenom": "string",
      "assetDenom": "string"
    }
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LongBook|object|false|none|none|
|» id|string(uint64)|false|none|none|
|» entry|object|false|none|none|
|»» price|string(uint64)|false|none|none|
|»» quantity|string(uint64)|false|none|none|
|»» allocationCreator|[string]|false|none|none|
|»» allocation|[string]|false|none|none|
|»» priceDenom|string|false|none|none|
|»» assetDenom|string|false|none|none|

<h2 id="tocS_sei-protocol.seichain.dex.QueryGetShortBookResponse">sei-protocol.seichain.dex.QueryGetShortBookResponse</h2>
<!-- backwards compatibility -->
<a id="schemasei-protocol.seichain.dex.querygetshortbookresponse"></a>
<a id="schema_sei-protocol.seichain.dex.QueryGetShortBookResponse"></a>
<a id="tocSsei-protocol.seichain.dex.querygetshortbookresponse"></a>
<a id="tocssei-protocol.seichain.dex.querygetshortbookresponse"></a>

```json
{
  "ShortBook": {
    "id": "string",
    "entry": {
      "price": "string",
      "quantity": "string",
      "allocationCreator": [
        "string"
      ],
      "allocation": [
        "string"
      ],
      "priceDenom": "string",
      "assetDenom": "string"
    }
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ShortBook|object|false|none|none|
|» id|string(uint64)|false|none|none|
|» entry|object|false|none|none|
|»» price|string(uint64)|false|none|none|
|»» quantity|string(uint64)|false|none|none|
|»» allocationCreator|[string]|false|none|none|
|»» allocation|[string]|false|none|none|
|»» priceDenom|string|false|none|none|
|»» assetDenom|string|false|none|none|

<h2 id="tocS_sei-protocol.seichain.dex.QueryGetTwapResponse">sei-protocol.seichain.dex.QueryGetTwapResponse</h2>
<!-- backwards compatibility -->
<a id="schemasei-protocol.seichain.dex.querygettwapresponse"></a>
<a id="schema_sei-protocol.seichain.dex.QueryGetTwapResponse"></a>
<a id="tocSsei-protocol.seichain.dex.querygettwapresponse"></a>
<a id="tocssei-protocol.seichain.dex.querygettwapresponse"></a>

```json
{}

```

### Properties

*None*

<h2 id="tocS_sei-protocol.seichain.dex.QueryParamsResponse">sei-protocol.seichain.dex.QueryParamsResponse</h2>
<!-- backwards compatibility -->
<a id="schemasei-protocol.seichain.dex.queryparamsresponse"></a>
<a id="schema_sei-protocol.seichain.dex.QueryParamsResponse"></a>
<a id="tocSsei-protocol.seichain.dex.queryparamsresponse"></a>
<a id="tocssei-protocol.seichain.dex.queryparamsresponse"></a>

```json
{
  "params": {}
}

```

QueryParamsResponse is response type for the Query/Params RPC method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|params|object|false|none|params holds all the parameters of this module.|

<h2 id="tocS_sei-protocol.seichain.dex.ShortBook">sei-protocol.seichain.dex.ShortBook</h2>
<!-- backwards compatibility -->
<a id="schemasei-protocol.seichain.dex.shortbook"></a>
<a id="schema_sei-protocol.seichain.dex.ShortBook"></a>
<a id="tocSsei-protocol.seichain.dex.shortbook"></a>
<a id="tocssei-protocol.seichain.dex.shortbook"></a>

```json
{
  "id": "string",
  "entry": {
    "price": "string",
    "quantity": "string",
    "allocationCreator": [
      "string"
    ],
    "allocation": [
      "string"
    ],
    "priceDenom": "string",
    "assetDenom": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uint64)|false|none|none|
|entry|object|false|none|none|
|» price|string(uint64)|false|none|none|
|» quantity|string(uint64)|false|none|none|
|» allocationCreator|[string]|false|none|none|
|» allocation|[string]|false|none|none|
|» priceDenom|string|false|none|none|
|» assetDenom|string|false|none|none|

<h2 id="tocS_cosmos.base.query.v1beta1.PageRequest">cosmos.base.query.v1beta1.PageRequest</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.base.query.v1beta1.pagerequest"></a>
<a id="schema_cosmos.base.query.v1beta1.PageRequest"></a>
<a id="tocScosmos.base.query.v1beta1.pagerequest"></a>
<a id="tocscosmos.base.query.v1beta1.pagerequest"></a>

```json
{
  "key": "string",
  "offset": "string",
  "limit": "string",
  "countTotal": true,
  "reverse": true
}

```

PageRequest is to be embedded in gRPC request messages for efficient
pagination. Ex:

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string(byte)|false|none|key is a value returned in PageResponse.next_key to begin<br>querying the next page most efficiently. Only one of offset or key<br>should be set.|
|offset|string(uint64)|false|none|offset is a numeric offset that can be used when key is unavailable.<br>It is less efficient than using key. Only one of offset or key should<br>be set.|
|limit|string(uint64)|false|none|limit is the total number of results to be returned in the result page.<br>If left empty it will default to a value to be set by each app.|
|countTotal|boolean|false|none|count_total is set to true  to indicate that the result set should include<br>a count of the total number of items available for pagination in UIs.<br>count_total is only respected when offset is used. It is ignored when key<br>is set.|
|reverse|boolean|false|none|reverse is set to true if results are to be returned in the descending order.<br><br>Since: cosmos-sdk 0.43|

<h2 id="tocS_cosmos.base.query.v1beta1.PageResponse">cosmos.base.query.v1beta1.PageResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.base.query.v1beta1.pageresponse"></a>
<a id="schema_cosmos.base.query.v1beta1.PageResponse"></a>
<a id="tocScosmos.base.query.v1beta1.pageresponse"></a>
<a id="tocscosmos.base.query.v1beta1.pageresponse"></a>

```json
{
  "nextKey": "string",
  "total": "string"
}

```

PageResponse is to be embedded in gRPC response messages where the
corresponding request message has used PageRequest.

 message SomeResponse {
         repeated Bar results = 1;
         PageResponse page = 2;
 }

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextKey|string(byte)|false|none|none|
|total|string(uint64)|false|none|none|

<h2 id="tocS_google.protobuf.Any">google.protobuf.Any</h2>
<!-- backwards compatibility -->
<a id="schemagoogle.protobuf.any"></a>
<a id="schema_google.protobuf.Any"></a>
<a id="tocSgoogle.protobuf.any"></a>
<a id="tocsgoogle.protobuf.any"></a>

```json
{
  "@type": "string",
  "property1": null,
  "property2": null
}

```

`Any` contains an arbitrary serialized protocol buffer message along with a
URL that describes the type of the serialized message.

Protobuf library provides support to pack/unpack Any values in the form
of utility functions or additional generated methods of the Any type.

Example 1: Pack and unpack a message in C++.

    Foo foo = ...;
    Any any;
    any.PackFrom(foo);
    ...
    if (any.UnpackTo(&foo)) {
      ...
    }

Example 2: Pack and unpack a message in Java.

    Foo foo = ...;
    Any any = Any.pack(foo);
    ...
    if (any.is(Foo.class)) {
      foo = any.unpack(Foo.class);
    }

 Example 3: Pack and unpack a message in Python.

    foo = Foo(...)
    any = Any()
    any.Pack(foo)
    ...
    if any.Is(Foo.DESCRIPTOR):
      any.Unpack(foo)
      ...

 Example 4: Pack and unpack a message in Go

     foo := &pb.Foo{...}
     any, err := anypb.New(foo)
     if err != nil {
       ...
     }
     ...
     foo := &pb.Foo{}
     if err := any.UnmarshalTo(foo); err != nil {
       ...
     }

The pack methods provided by protobuf library will by default use
'type.googleapis.com/full.type.name' as the type URL and the unpack
methods only use the fully qualified type name after the last '/'
in the type URL, for example "foo.bar.com/x/y.z" will yield type
name "y.z".

JSON
====
The JSON representation of an `Any` value uses the regular
representation of the deserialized, embedded message, with an
additional field `@type` which contains the type URL. Example:

    package google.profile;
    message Person {
      string first_name = 1;
      string last_name = 2;
    }

    {
      "@type": "type.googleapis.com/google.profile.Person",
      "firstName": <string>,
      "lastName": <string>
    }

If the embedded message type is well-known and has a custom JSON
representation, that representation will be embedded adding a field
`value` which holds the custom JSON in addition to the `@type`
field. Example (for message [google.protobuf.Duration][]):

    {
      "@type": "type.googleapis.com/google.protobuf.Duration",
      "value": "1.212s"
    }

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|any|false|none|none|
|@type|string|false|none|A URL/resource name that uniquely identifies the type of the serialized<br>protocol buffer message. This string must contain at least<br>one "/" character. The last segment of the URL's path must represent<br>the fully qualified name of the type (as in<br>`path/google.protobuf.Duration`). The name should be in a canonical form<br>(e.g., leading "." is not accepted).<br><br>In practice, teams usually precompile into the binary all types that they<br>expect it to use in the context of Any. However, for URLs which use the<br>scheme `http`, `https`, or no scheme, one can optionally set up a type<br>server that maps type URLs to message definitions as follows:<br><br>* If no scheme is provided, `https` is assumed.<br>* An HTTP GET on the URL must yield a [google.protobuf.Type][]<br>  value in binary format, or produce an error.<br>* Applications are allowed to cache lookup results based on the<br>  URL, or have them precompiled into a binary to avoid any<br>  lookup. Therefore, binary compatibility needs to be preserved<br>  on changes to types. (Use versioned type names to manage<br>  breaking changes.)<br><br>Note: this functionality is not currently available in the official<br>protobuf release, and it is not used for type URLs beginning with<br>type.googleapis.com.<br><br>Schemes other than `http`, `https` (or the empty scheme) might be<br>used with implementation specific semantics.|

<h2 id="tocS_google.rpc.Status">google.rpc.Status</h2>
<!-- backwards compatibility -->
<a id="schemagoogle.rpc.status"></a>
<a id="schema_google.rpc.Status"></a>
<a id="tocSgoogle.rpc.status"></a>
<a id="tocsgoogle.rpc.status"></a>

```json
{
  "code": 0,
  "message": "string",
  "details": [
    {
      "@type": "string",
      "property1": null,
      "property2": null
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|false|none|none|
|message|string|false|none|none|
|details|[object]|false|none|none|
|» **additionalProperties**|any|false|none|none|
|» @type|string|false|none|A URL/resource name that uniquely identifies the type of the serialized<br>protocol buffer message. This string must contain at least<br>one "/" character. The last segment of the URL's path must represent<br>the fully qualified name of the type (as in<br>`path/google.protobuf.Duration`). The name should be in a canonical form<br>(e.g., leading "." is not accepted).<br><br>In practice, teams usually precompile into the binary all types that they<br>expect it to use in the context of Any. However, for URLs which use the<br>scheme `http`, `https`, or no scheme, one can optionally set up a type<br>server that maps type URLs to message definitions as follows:<br><br>* If no scheme is provided, `https` is assumed.<br>* An HTTP GET on the URL must yield a [google.protobuf.Type][]<br>  value in binary format, or produce an error.<br>* Applications are allowed to cache lookup results based on the<br>  URL, or have them precompiled into a binary to avoid any<br>  lookup. Therefore, binary compatibility needs to be preserved<br>  on changes to types. (Use versioned type names to manage<br>  breaking changes.)<br><br>Note: this functionality is not currently available in the official<br>protobuf release, and it is not used for type URLs beginning with<br>type.googleapis.com.<br><br>Schemes other than `http`, `https` (or the empty scheme) might be<br>used with implementation specific semantics.|

<h2 id="tocS_cosmos.authz.v1beta1.Grant">cosmos.authz.v1beta1.Grant</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.authz.v1beta1.grant"></a>
<a id="schema_cosmos.authz.v1beta1.Grant"></a>
<a id="tocScosmos.authz.v1beta1.grant"></a>
<a id="tocscosmos.authz.v1beta1.grant"></a>

```json
{
  "authorization": {
    "@type": "string",
    "property1": null,
    "property2": null
  },
  "expiration": "2019-08-24T14:15:22Z"
}

```

Grant gives permissions to execute
the provide method with expiration time.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authorization|object|false|none|`Any` contains an arbitrary serialized protocol buffer message along with a<br>URL that describes the type of the serialized message.<br><br>Protobuf library provides support to pack/unpack Any values in the form<br>of utility functions or additional generated methods of the Any type.<br><br>Example 1: Pack and unpack a message in C++.<br><br>    Foo foo = ...;<br>    Any any;<br>    any.PackFrom(foo);<br>    ...<br>    if (any.UnpackTo(&foo)) {<br>      ...<br>    }<br><br>Example 2: Pack and unpack a message in Java.<br><br>    Foo foo = ...;<br>    Any any = Any.pack(foo);<br>    ...<br>    if (any.is(Foo.class)) {<br>      foo = any.unpack(Foo.class);<br>    }<br><br> Example 3: Pack and unpack a message in Python.<br><br>    foo = Foo(...)<br>    any = Any()<br>    any.Pack(foo)<br>    ...<br>    if any.Is(Foo.DESCRIPTOR):<br>      any.Unpack(foo)<br>      ...<br><br> Example 4: Pack and unpack a message in Go<br><br>     foo := &pb.Foo{...}<br>     any, err := anypb.New(foo)<br>     if err != nil {<br>       ...<br>     }<br>     ...<br>     foo := &pb.Foo{}<br>     if err := any.UnmarshalTo(foo); err != nil {<br>       ...<br>     }<br><br>The pack methods provided by protobuf library will by default use<br>'type.googleapis.com/full.type.name' as the type URL and the unpack<br>methods only use the fully qualified type name after the last '/'<br>in the type URL, for example "foo.bar.com/x/y.z" will yield type<br>name "y.z".<br><br><br>JSON<br>====<br>The JSON representation of an `Any` value uses the regular<br>representation of the deserialized, embedded message, with an<br>additional field `@type` which contains the type URL. Example:<br><br>    package google.profile;<br>    message Person {<br>      string first_name = 1;<br>      string last_name = 2;<br>    }<br><br>    {<br>      "@type": "type.googleapis.com/google.profile.Person",<br>      "firstName": <string>,<br>      "lastName": <string><br>    }<br><br>If the embedded message type is well-known and has a custom JSON<br>representation, that representation will be embedded adding a field<br>`value` which holds the custom JSON in addition to the `@type`<br>field. Example (for message [google.protobuf.Duration][]):<br><br>    {<br>      "@type": "type.googleapis.com/google.protobuf.Duration",<br>      "value": "1.212s"<br>    }|
|» **additionalProperties**|any|false|none|none|
|» @type|string|false|none|A URL/resource name that uniquely identifies the type of the serialized<br>protocol buffer message. This string must contain at least<br>one "/" character. The last segment of the URL's path must represent<br>the fully qualified name of the type (as in<br>`path/google.protobuf.Duration`). The name should be in a canonical form<br>(e.g., leading "." is not accepted).<br><br>In practice, teams usually precompile into the binary all types that they<br>expect it to use in the context of Any. However, for URLs which use the<br>scheme `http`, `https`, or no scheme, one can optionally set up a type<br>server that maps type URLs to message definitions as follows:<br><br>* If no scheme is provided, `https` is assumed.<br>* An HTTP GET on the URL must yield a [google.protobuf.Type][]<br>  value in binary format, or produce an error.<br>* Applications are allowed to cache lookup results based on the<br>  URL, or have them precompiled into a binary to avoid any<br>  lookup. Therefore, binary compatibility needs to be preserved<br>  on changes to types. (Use versioned type names to manage<br>  breaking changes.)<br><br>Note: this functionality is not currently available in the official<br>protobuf release, and it is not used for type URLs beginning with<br>type.googleapis.com.<br><br>Schemes other than `http`, `https` (or the empty scheme) might be<br>used with implementation specific semantics.|
|expiration|string(date-time)|false|none|none|

<h2 id="tocS_cosmos.authz.v1beta1.MsgExecResponse">cosmos.authz.v1beta1.MsgExecResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.authz.v1beta1.msgexecresponse"></a>
<a id="schema_cosmos.authz.v1beta1.MsgExecResponse"></a>
<a id="tocScosmos.authz.v1beta1.msgexecresponse"></a>
<a id="tocscosmos.authz.v1beta1.msgexecresponse"></a>

```json
{
  "results": [
    "string"
  ]
}

```

MsgExecResponse defines the Msg/MsgExecResponse response type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[string]|false|none|none|

<h2 id="tocS_cosmos.authz.v1beta1.MsgGrantResponse">cosmos.authz.v1beta1.MsgGrantResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.authz.v1beta1.msggrantresponse"></a>
<a id="schema_cosmos.authz.v1beta1.MsgGrantResponse"></a>
<a id="tocScosmos.authz.v1beta1.msggrantresponse"></a>
<a id="tocscosmos.authz.v1beta1.msggrantresponse"></a>

```json
{}

```

MsgGrantResponse defines the Msg/MsgGrant response type.

### Properties

*None*

<h2 id="tocS_cosmos.authz.v1beta1.MsgRevokeResponse">cosmos.authz.v1beta1.MsgRevokeResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.authz.v1beta1.msgrevokeresponse"></a>
<a id="schema_cosmos.authz.v1beta1.MsgRevokeResponse"></a>
<a id="tocScosmos.authz.v1beta1.msgrevokeresponse"></a>
<a id="tocscosmos.authz.v1beta1.msgrevokeresponse"></a>

```json
{}

```

MsgRevokeResponse defines the Msg/MsgRevokeResponse response type.

### Properties

*None*

<h2 id="tocS_cosmos.authz.v1beta1.QueryGrantsResponse">cosmos.authz.v1beta1.QueryGrantsResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.authz.v1beta1.querygrantsresponse"></a>
<a id="schema_cosmos.authz.v1beta1.QueryGrantsResponse"></a>
<a id="tocScosmos.authz.v1beta1.querygrantsresponse"></a>
<a id="tocscosmos.authz.v1beta1.querygrantsresponse"></a>

```json
{
  "grants": [
    {
      "authorization": {
        "@type": "string",
        "property1": null,
        "property2": null
      },
      "expiration": "2019-08-24T14:15:22Z"
    }
  ],
  "pagination": {
    "nextKey": "string",
    "total": "string"
  }
}

```

QueryGrantsResponse is the response type for the Query/Authorizations RPC method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|grants|[object]|false|none|authorizations is a list of grants granted for grantee by granter.|
|» authorization|object|false|none|`Any` contains an arbitrary serialized protocol buffer message along with a<br>URL that describes the type of the serialized message.<br><br>Protobuf library provides support to pack/unpack Any values in the form<br>of utility functions or additional generated methods of the Any type.<br><br>Example 1: Pack and unpack a message in C++.<br><br>    Foo foo = ...;<br>    Any any;<br>    any.PackFrom(foo);<br>    ...<br>    if (any.UnpackTo(&foo)) {<br>      ...<br>    }<br><br>Example 2: Pack and unpack a message in Java.<br><br>    Foo foo = ...;<br>    Any any = Any.pack(foo);<br>    ...<br>    if (any.is(Foo.class)) {<br>      foo = any.unpack(Foo.class);<br>    }<br><br> Example 3: Pack and unpack a message in Python.<br><br>    foo = Foo(...)<br>    any = Any()<br>    any.Pack(foo)<br>    ...<br>    if any.Is(Foo.DESCRIPTOR):<br>      any.Unpack(foo)<br>      ...<br><br> Example 4: Pack and unpack a message in Go<br><br>     foo := &pb.Foo{...}<br>     any, err := anypb.New(foo)<br>     if err != nil {<br>       ...<br>     }<br>     ...<br>     foo := &pb.Foo{}<br>     if err := any.UnmarshalTo(foo); err != nil {<br>       ...<br>     }<br><br>The pack methods provided by protobuf library will by default use<br>'type.googleapis.com/full.type.name' as the type URL and the unpack<br>methods only use the fully qualified type name after the last '/'<br>in the type URL, for example "foo.bar.com/x/y.z" will yield type<br>name "y.z".<br><br><br>JSON<br>====<br>The JSON representation of an `Any` value uses the regular<br>representation of the deserialized, embedded message, with an<br>additional field `@type` which contains the type URL. Example:<br><br>    package google.profile;<br>    message Person {<br>      string first_name = 1;<br>      string last_name = 2;<br>    }<br><br>    {<br>      "@type": "type.googleapis.com/google.profile.Person",<br>      "firstName": <string>,<br>      "lastName": <string><br>    }<br><br>If the embedded message type is well-known and has a custom JSON<br>representation, that representation will be embedded adding a field<br>`value` which holds the custom JSON in addition to the `@type`<br>field. Example (for message [google.protobuf.Duration][]):<br><br>    {<br>      "@type": "type.googleapis.com/google.protobuf.Duration",<br>      "value": "1.212s"<br>    }|
|»» **additionalProperties**|any|false|none|none|
|»» @type|string|false|none|A URL/resource name that uniquely identifies the type of the serialized<br>protocol buffer message. This string must contain at least<br>one "/" character. The last segment of the URL's path must represent<br>the fully qualified name of the type (as in<br>`path/google.protobuf.Duration`). The name should be in a canonical form<br>(e.g., leading "." is not accepted).<br><br>In practice, teams usually precompile into the binary all types that they<br>expect it to use in the context of Any. However, for URLs which use the<br>scheme `http`, `https`, or no scheme, one can optionally set up a type<br>server that maps type URLs to message definitions as follows:<br><br>* If no scheme is provided, `https` is assumed.<br>* An HTTP GET on the URL must yield a [google.protobuf.Type][]<br>  value in binary format, or produce an error.<br>* Applications are allowed to cache lookup results based on the<br>  URL, or have them precompiled into a binary to avoid any<br>  lookup. Therefore, binary compatibility needs to be preserved<br>  on changes to types. (Use versioned type names to manage<br>  breaking changes.)<br><br>Note: this functionality is not currently available in the official<br>protobuf release, and it is not used for type URLs beginning with<br>type.googleapis.com.<br><br>Schemes other than `http`, `https` (or the empty scheme) might be<br>used with implementation specific semantics.|
|» expiration|string(date-time)|false|none|none|
|pagination|object|false|none|pagination defines an pagination for the response.|
|» nextKey|string(byte)|false|none|none|
|» total|string(uint64)|false|none|none|

<h2 id="tocS_cosmos.bank.v1beta1.DenomUnit">cosmos.bank.v1beta1.DenomUnit</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.bank.v1beta1.denomunit"></a>
<a id="schema_cosmos.bank.v1beta1.DenomUnit"></a>
<a id="tocScosmos.bank.v1beta1.denomunit"></a>
<a id="tocscosmos.bank.v1beta1.denomunit"></a>

```json
{
  "denom": "string",
  "exponent": 0,
  "aliases": [
    "string"
  ]
}

```

DenomUnit represents a struct that describes a given
denomination unit of the basic token.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|denom|string|false|none|denom represents the string name of the given denom unit (e.g uatom).|
|exponent|integer(int64)|false|none|exponent represents power of 10 exponent that one must<br>raise the base_denom to in order to equal the given DenomUnit's denom<br>1 denom = 1^exponent base_denom<br>(e.g. with a base_denom of uatom, one can create a DenomUnit of 'atom' with<br>exponent = 6, thus: 1 atom = 10^6 uatom).|
|aliases|[string]|false|none|none|

<h2 id="tocS_cosmos.bank.v1beta1.Input">cosmos.bank.v1beta1.Input</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.bank.v1beta1.input"></a>
<a id="schema_cosmos.bank.v1beta1.Input"></a>
<a id="tocScosmos.bank.v1beta1.input"></a>
<a id="tocscosmos.bank.v1beta1.input"></a>

```json
{
  "address": "string",
  "coins": [
    {
      "denom": "string",
      "amount": "string"
    }
  ]
}

```

Input models transaction input.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|false|none|none|
|coins|[object]|false|none|none|
|» denom|string|false|none|none|
|» amount|string|false|none|none|

<h2 id="tocS_cosmos.bank.v1beta1.Metadata">cosmos.bank.v1beta1.Metadata</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.bank.v1beta1.metadata"></a>
<a id="schema_cosmos.bank.v1beta1.Metadata"></a>
<a id="tocScosmos.bank.v1beta1.metadata"></a>
<a id="tocscosmos.bank.v1beta1.metadata"></a>

```json
{
  "description": "string",
  "denomUnits": [
    {
      "denom": "string",
      "exponent": 0,
      "aliases": [
        "string"
      ]
    }
  ],
  "base": "string",
  "display": "string",
  "name": "string",
  "symbol": "string"
}

```

Metadata represents a struct that describes
a basic token.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|denomUnits|[object]|false|none|none|
|» denom|string|false|none|denom represents the string name of the given denom unit (e.g uatom).|
|» exponent|integer(int64)|false|none|exponent represents power of 10 exponent that one must<br>raise the base_denom to in order to equal the given DenomUnit's denom<br>1 denom = 1^exponent base_denom<br>(e.g. with a base_denom of uatom, one can create a DenomUnit of 'atom' with<br>exponent = 6, thus: 1 atom = 10^6 uatom).|
|» aliases|[string]|false|none|none|
|base|string|false|none|base represents the base denom (should be the DenomUnit with exponent = 0).|
|display|string|false|none|display indicates the suggested denom that should be<br>displayed in clients.|
|name|string|false|none|Since: cosmos-sdk 0.43|
|symbol|string|false|none|symbol is the token symbol usually shown on exchanges (eg: ATOM). This can<br>be the same as the display.<br><br>Since: cosmos-sdk 0.43|

<h2 id="tocS_cosmos.bank.v1beta1.MsgMultiSendResponse">cosmos.bank.v1beta1.MsgMultiSendResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.bank.v1beta1.msgmultisendresponse"></a>
<a id="schema_cosmos.bank.v1beta1.MsgMultiSendResponse"></a>
<a id="tocScosmos.bank.v1beta1.msgmultisendresponse"></a>
<a id="tocscosmos.bank.v1beta1.msgmultisendresponse"></a>

```json
{}

```

MsgMultiSendResponse defines the Msg/MultiSend response type.

### Properties

*None*

<h2 id="tocS_cosmos.bank.v1beta1.MsgSendResponse">cosmos.bank.v1beta1.MsgSendResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.bank.v1beta1.msgsendresponse"></a>
<a id="schema_cosmos.bank.v1beta1.MsgSendResponse"></a>
<a id="tocScosmos.bank.v1beta1.msgsendresponse"></a>
<a id="tocscosmos.bank.v1beta1.msgsendresponse"></a>

```json
{}

```

MsgSendResponse defines the Msg/Send response type.

### Properties

*None*

<h2 id="tocS_cosmos.bank.v1beta1.Output">cosmos.bank.v1beta1.Output</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.bank.v1beta1.output"></a>
<a id="schema_cosmos.bank.v1beta1.Output"></a>
<a id="tocScosmos.bank.v1beta1.output"></a>
<a id="tocscosmos.bank.v1beta1.output"></a>

```json
{
  "address": "string",
  "coins": [
    {
      "denom": "string",
      "amount": "string"
    }
  ]
}

```

Output models transaction outputs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|false|none|none|
|coins|[object]|false|none|none|
|» denom|string|false|none|none|
|» amount|string|false|none|none|

<h2 id="tocS_cosmos.bank.v1beta1.Params">cosmos.bank.v1beta1.Params</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.bank.v1beta1.params"></a>
<a id="schema_cosmos.bank.v1beta1.Params"></a>
<a id="tocScosmos.bank.v1beta1.params"></a>
<a id="tocscosmos.bank.v1beta1.params"></a>

```json
{
  "sendEnabled": [
    {
      "denom": "string",
      "enabled": true
    }
  ],
  "defaultSendEnabled": true
}

```

Params defines the parameters for the bank module.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sendEnabled|[object]|false|none|none|
|» denom|string|false|none|none|
|» enabled|boolean|false|none|none|
|defaultSendEnabled|boolean|false|none|none|

<h2 id="tocS_cosmos.bank.v1beta1.QueryAllBalancesResponse">cosmos.bank.v1beta1.QueryAllBalancesResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.bank.v1beta1.queryallbalancesresponse"></a>
<a id="schema_cosmos.bank.v1beta1.QueryAllBalancesResponse"></a>
<a id="tocScosmos.bank.v1beta1.queryallbalancesresponse"></a>
<a id="tocscosmos.bank.v1beta1.queryallbalancesresponse"></a>

```json
{
  "balances": [
    {
      "denom": "string",
      "amount": "string"
    }
  ],
  "pagination": {
    "nextKey": "string",
    "total": "string"
  }
}

```

QueryAllBalancesResponse is the response type for the Query/AllBalances RPC
method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balances|[object]|false|none|balances is the balances of all the coins.|
|» denom|string|false|none|none|
|» amount|string|false|none|none|
|pagination|object|false|none|pagination defines the pagination in the response.|
|» nextKey|string(byte)|false|none|none|
|» total|string(uint64)|false|none|none|

<h2 id="tocS_cosmos.bank.v1beta1.QueryBalanceResponse">cosmos.bank.v1beta1.QueryBalanceResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.bank.v1beta1.querybalanceresponse"></a>
<a id="schema_cosmos.bank.v1beta1.QueryBalanceResponse"></a>
<a id="tocScosmos.bank.v1beta1.querybalanceresponse"></a>
<a id="tocscosmos.bank.v1beta1.querybalanceresponse"></a>

```json
{
  "balance": {
    "denom": "string",
    "amount": "string"
  }
}

```

QueryBalanceResponse is the response type for the Query/Balance RPC method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balance|object|false|none|Coin defines a token with a denomination and an amount.<br><br>NOTE: The amount field is an Int which implements the custom method<br>signatures required by gogoproto.|
|» denom|string|false|none|none|
|» amount|string|false|none|none|

<h2 id="tocS_cosmos.bank.v1beta1.QueryDenomMetadataResponse">cosmos.bank.v1beta1.QueryDenomMetadataResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.bank.v1beta1.querydenommetadataresponse"></a>
<a id="schema_cosmos.bank.v1beta1.QueryDenomMetadataResponse"></a>
<a id="tocScosmos.bank.v1beta1.querydenommetadataresponse"></a>
<a id="tocscosmos.bank.v1beta1.querydenommetadataresponse"></a>

```json
{
  "metadata": {
    "description": "string",
    "denomUnits": [
      {
        "denom": "string",
        "exponent": 0,
        "aliases": [
          "string"
        ]
      }
    ],
    "base": "string",
    "display": "string",
    "name": "string",
    "symbol": "string"
  }
}

```

QueryDenomMetadataResponse is the response type for the Query/DenomMetadata RPC
method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metadata|object|false|none|Metadata represents a struct that describes<br>a basic token.|
|» description|string|false|none|none|
|» denomUnits|[object]|false|none|none|
|»» denom|string|false|none|denom represents the string name of the given denom unit (e.g uatom).|
|»» exponent|integer(int64)|false|none|exponent represents power of 10 exponent that one must<br>raise the base_denom to in order to equal the given DenomUnit's denom<br>1 denom = 1^exponent base_denom<br>(e.g. with a base_denom of uatom, one can create a DenomUnit of 'atom' with<br>exponent = 6, thus: 1 atom = 10^6 uatom).|
|»» aliases|[string]|false|none|none|
|» base|string|false|none|base represents the base denom (should be the DenomUnit with exponent = 0).|
|» display|string|false|none|display indicates the suggested denom that should be<br>displayed in clients.|
|» name|string|false|none|Since: cosmos-sdk 0.43|
|» symbol|string|false|none|symbol is the token symbol usually shown on exchanges (eg: ATOM). This can<br>be the same as the display.<br><br>Since: cosmos-sdk 0.43|

<h2 id="tocS_cosmos.bank.v1beta1.QueryDenomsMetadataResponse">cosmos.bank.v1beta1.QueryDenomsMetadataResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.bank.v1beta1.querydenomsmetadataresponse"></a>
<a id="schema_cosmos.bank.v1beta1.QueryDenomsMetadataResponse"></a>
<a id="tocScosmos.bank.v1beta1.querydenomsmetadataresponse"></a>
<a id="tocscosmos.bank.v1beta1.querydenomsmetadataresponse"></a>

```json
{
  "metadatas": [
    {
      "description": "string",
      "denomUnits": [
        {
          "denom": "string",
          "exponent": 0,
          "aliases": [
            "string"
          ]
        }
      ],
      "base": "string",
      "display": "string",
      "name": "string",
      "symbol": "string"
    }
  ],
  "pagination": {
    "nextKey": "string",
    "total": "string"
  }
}

```

QueryDenomsMetadataResponse is the response type for the Query/DenomsMetadata RPC
method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metadatas|[object]|false|none|metadata provides the client information for all the registered tokens.|
|» description|string|false|none|none|
|» denomUnits|[object]|false|none|none|
|»» denom|string|false|none|denom represents the string name of the given denom unit (e.g uatom).|
|»» exponent|integer(int64)|false|none|exponent represents power of 10 exponent that one must<br>raise the base_denom to in order to equal the given DenomUnit's denom<br>1 denom = 1^exponent base_denom<br>(e.g. with a base_denom of uatom, one can create a DenomUnit of 'atom' with<br>exponent = 6, thus: 1 atom = 10^6 uatom).|
|»» aliases|[string]|false|none|none|
|» base|string|false|none|base represents the base denom (should be the DenomUnit with exponent = 0).|
|» display|string|false|none|display indicates the suggested denom that should be<br>displayed in clients.|
|» name|string|false|none|Since: cosmos-sdk 0.43|
|» symbol|string|false|none|symbol is the token symbol usually shown on exchanges (eg: ATOM). This can<br>be the same as the display.<br><br>Since: cosmos-sdk 0.43|
|pagination|object|false|none|pagination defines the pagination in the response.|
|» nextKey|string(byte)|false|none|none|
|» total|string(uint64)|false|none|none|

<h2 id="tocS_cosmos.bank.v1beta1.QueryParamsResponse">cosmos.bank.v1beta1.QueryParamsResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.bank.v1beta1.queryparamsresponse"></a>
<a id="schema_cosmos.bank.v1beta1.QueryParamsResponse"></a>
<a id="tocScosmos.bank.v1beta1.queryparamsresponse"></a>
<a id="tocscosmos.bank.v1beta1.queryparamsresponse"></a>

```json
{
  "params": {
    "sendEnabled": [
      {
        "denom": "string",
        "enabled": true
      }
    ],
    "defaultSendEnabled": true
  }
}

```

QueryParamsResponse defines the response type for querying x/bank parameters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|params|object|false|none|Params defines the parameters for the bank module.|
|» sendEnabled|[object]|false|none|none|
|»» denom|string|false|none|none|
|»» enabled|boolean|false|none|none|
|» defaultSendEnabled|boolean|false|none|none|

<h2 id="tocS_cosmos.bank.v1beta1.QuerySupplyOfResponse">cosmos.bank.v1beta1.QuerySupplyOfResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.bank.v1beta1.querysupplyofresponse"></a>
<a id="schema_cosmos.bank.v1beta1.QuerySupplyOfResponse"></a>
<a id="tocScosmos.bank.v1beta1.querysupplyofresponse"></a>
<a id="tocscosmos.bank.v1beta1.querysupplyofresponse"></a>

```json
{
  "amount": {
    "denom": "string",
    "amount": "string"
  }
}

```

QuerySupplyOfResponse is the response type for the Query/SupplyOf RPC method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|object|false|none|Coin defines a token with a denomination and an amount.<br><br>NOTE: The amount field is an Int which implements the custom method<br>signatures required by gogoproto.|
|» denom|string|false|none|none|
|» amount|string|false|none|none|

<h2 id="tocS_cosmos.bank.v1beta1.QueryTotalSupplyResponse">cosmos.bank.v1beta1.QueryTotalSupplyResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.bank.v1beta1.querytotalsupplyresponse"></a>
<a id="schema_cosmos.bank.v1beta1.QueryTotalSupplyResponse"></a>
<a id="tocScosmos.bank.v1beta1.querytotalsupplyresponse"></a>
<a id="tocscosmos.bank.v1beta1.querytotalsupplyresponse"></a>

```json
{
  "supply": [
    {
      "denom": "string",
      "amount": "string"
    }
  ],
  "pagination": {
    "nextKey": "string",
    "total": "string"
  }
}

```

QueryTotalSupplyResponse is the response type for the Query/TotalSupply RPC
method

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|supply|[object]|false|none|none|
|» denom|string|false|none|none|
|» amount|string|false|none|none|
|pagination|object|false|none|pagination defines the pagination in the response.<br><br>Since: cosmos-sdk 0.43|
|» nextKey|string(byte)|false|none|none|
|» total|string(uint64)|false|none|none|

<h2 id="tocS_cosmos.bank.v1beta1.SendEnabled">cosmos.bank.v1beta1.SendEnabled</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.bank.v1beta1.sendenabled"></a>
<a id="schema_cosmos.bank.v1beta1.SendEnabled"></a>
<a id="tocScosmos.bank.v1beta1.sendenabled"></a>
<a id="tocscosmos.bank.v1beta1.sendenabled"></a>

```json
{
  "denom": "string",
  "enabled": true
}

```

SendEnabled maps coin denom to a send_enabled status (whether a denom is
sendable).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|denom|string|false|none|none|
|enabled|boolean|false|none|none|

<h2 id="tocS_cosmos.base.v1beta1.Coin">cosmos.base.v1beta1.Coin</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.base.v1beta1.coin"></a>
<a id="schema_cosmos.base.v1beta1.Coin"></a>
<a id="tocScosmos.base.v1beta1.coin"></a>
<a id="tocscosmos.base.v1beta1.coin"></a>

```json
{
  "denom": "string",
  "amount": "string"
}

```

Coin defines a token with a denomination and an amount.

NOTE: The amount field is an Int which implements the custom method
signatures required by gogoproto.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|denom|string|false|none|none|
|amount|string|false|none|none|

<h2 id="tocS_cosmos.crisis.v1beta1.MsgVerifyInvariantResponse">cosmos.crisis.v1beta1.MsgVerifyInvariantResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.crisis.v1beta1.msgverifyinvariantresponse"></a>
<a id="schema_cosmos.crisis.v1beta1.MsgVerifyInvariantResponse"></a>
<a id="tocScosmos.crisis.v1beta1.msgverifyinvariantresponse"></a>
<a id="tocscosmos.crisis.v1beta1.msgverifyinvariantresponse"></a>

```json
{}

```

MsgVerifyInvariantResponse defines the Msg/VerifyInvariant response type.

### Properties

*None*

<h2 id="tocS_cosmos.base.v1beta1.DecCoin">cosmos.base.v1beta1.DecCoin</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.base.v1beta1.deccoin"></a>
<a id="schema_cosmos.base.v1beta1.DecCoin"></a>
<a id="tocScosmos.base.v1beta1.deccoin"></a>
<a id="tocscosmos.base.v1beta1.deccoin"></a>

```json
{
  "denom": "string",
  "amount": "string"
}

```

DecCoin defines a token with a denomination and a decimal amount.

NOTE: The amount field is an Dec which implements the custom method
signatures required by gogoproto.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|denom|string|false|none|none|
|amount|string|false|none|none|

<h2 id="tocS_cosmos.distribution.v1beta1.DelegationDelegatorReward">cosmos.distribution.v1beta1.DelegationDelegatorReward</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.distribution.v1beta1.delegationdelegatorreward"></a>
<a id="schema_cosmos.distribution.v1beta1.DelegationDelegatorReward"></a>
<a id="tocScosmos.distribution.v1beta1.delegationdelegatorreward"></a>
<a id="tocscosmos.distribution.v1beta1.delegationdelegatorreward"></a>

```json
{
  "validatorAddress": "string",
  "reward": [
    {
      "denom": "string",
      "amount": "string"
    }
  ]
}

```

DelegationDelegatorReward represents the properties
of a delegator's delegation reward.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|validatorAddress|string|false|none|none|
|reward|[object]|false|none|none|
|» denom|string|false|none|none|
|» amount|string|false|none|none|

<h2 id="tocS_cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse">cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.distribution.v1beta1.msgfundcommunitypoolresponse"></a>
<a id="schema_cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse"></a>
<a id="tocScosmos.distribution.v1beta1.msgfundcommunitypoolresponse"></a>
<a id="tocscosmos.distribution.v1beta1.msgfundcommunitypoolresponse"></a>

```json
{}

```

MsgFundCommunityPoolResponse defines the Msg/FundCommunityPool response type.

### Properties

*None*

<h2 id="tocS_cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse">cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.distribution.v1beta1.msgsetwithdrawaddressresponse"></a>
<a id="schema_cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse"></a>
<a id="tocScosmos.distribution.v1beta1.msgsetwithdrawaddressresponse"></a>
<a id="tocscosmos.distribution.v1beta1.msgsetwithdrawaddressresponse"></a>

```json
{}

```

MsgSetWithdrawAddressResponse defines the Msg/SetWithdrawAddress response type.

### Properties

*None*

<h2 id="tocS_cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse">cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.distribution.v1beta1.msgwithdrawdelegatorrewardresponse"></a>
<a id="schema_cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse"></a>
<a id="tocScosmos.distribution.v1beta1.msgwithdrawdelegatorrewardresponse"></a>
<a id="tocscosmos.distribution.v1beta1.msgwithdrawdelegatorrewardresponse"></a>

```json
{}

```

MsgWithdrawDelegatorRewardResponse defines the Msg/WithdrawDelegatorReward response type.

### Properties

*None*

<h2 id="tocS_cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse">cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.distribution.v1beta1.msgwithdrawvalidatorcommissionresponse"></a>
<a id="schema_cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse"></a>
<a id="tocScosmos.distribution.v1beta1.msgwithdrawvalidatorcommissionresponse"></a>
<a id="tocscosmos.distribution.v1beta1.msgwithdrawvalidatorcommissionresponse"></a>

```json
{}

```

MsgWithdrawValidatorCommissionResponse defines the Msg/WithdrawValidatorCommission response type.

### Properties

*None*

<h2 id="tocS_cosmos.distribution.v1beta1.Params">cosmos.distribution.v1beta1.Params</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.distribution.v1beta1.params"></a>
<a id="schema_cosmos.distribution.v1beta1.Params"></a>
<a id="tocScosmos.distribution.v1beta1.params"></a>
<a id="tocscosmos.distribution.v1beta1.params"></a>

```json
{
  "communityTax": "string",
  "baseProposerReward": "string",
  "bonusProposerReward": "string",
  "withdrawAddrEnabled": true
}

```

Params defines the set of params for the distribution module.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|communityTax|string|false|none|none|
|baseProposerReward|string|false|none|none|
|bonusProposerReward|string|false|none|none|
|withdrawAddrEnabled|boolean|false|none|none|

<h2 id="tocS_cosmos.distribution.v1beta1.QueryCommunityPoolResponse">cosmos.distribution.v1beta1.QueryCommunityPoolResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.distribution.v1beta1.querycommunitypoolresponse"></a>
<a id="schema_cosmos.distribution.v1beta1.QueryCommunityPoolResponse"></a>
<a id="tocScosmos.distribution.v1beta1.querycommunitypoolresponse"></a>
<a id="tocscosmos.distribution.v1beta1.querycommunitypoolresponse"></a>

```json
{
  "pool": [
    {
      "denom": "string",
      "amount": "string"
    }
  ]
}

```

QueryCommunityPoolResponse is the response type for the Query/CommunityPool
RPC method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pool|[object]|false|none|pool defines community pool's coins.|
|» denom|string|false|none|none|
|» amount|string|false|none|none|

<h2 id="tocS_cosmos.distribution.v1beta1.QueryDelegationRewardsResponse">cosmos.distribution.v1beta1.QueryDelegationRewardsResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.distribution.v1beta1.querydelegationrewardsresponse"></a>
<a id="schema_cosmos.distribution.v1beta1.QueryDelegationRewardsResponse"></a>
<a id="tocScosmos.distribution.v1beta1.querydelegationrewardsresponse"></a>
<a id="tocscosmos.distribution.v1beta1.querydelegationrewardsresponse"></a>

```json
{
  "rewards": [
    {
      "denom": "string",
      "amount": "string"
    }
  ]
}

```

QueryDelegationRewardsResponse is the response type for the
Query/DelegationRewards RPC method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rewards|[object]|false|none|rewards defines the rewards accrued by a delegation.|
|» denom|string|false|none|none|
|» amount|string|false|none|none|

<h2 id="tocS_cosmos.distribution.v1beta1.QueryDelegationTotalRewardsResponse">cosmos.distribution.v1beta1.QueryDelegationTotalRewardsResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.distribution.v1beta1.querydelegationtotalrewardsresponse"></a>
<a id="schema_cosmos.distribution.v1beta1.QueryDelegationTotalRewardsResponse"></a>
<a id="tocScosmos.distribution.v1beta1.querydelegationtotalrewardsresponse"></a>
<a id="tocscosmos.distribution.v1beta1.querydelegationtotalrewardsresponse"></a>

```json
{
  "rewards": [
    {
      "validatorAddress": "string",
      "reward": [
        {
          "denom": "string",
          "amount": "string"
        }
      ]
    }
  ],
  "total": [
    {
      "denom": "string",
      "amount": "string"
    }
  ]
}

```

QueryDelegationTotalRewardsResponse is the response type for the
Query/DelegationTotalRewards RPC method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rewards|[object]|false|none|rewards defines all the rewards accrued by a delegator.|
|» validatorAddress|string|false|none|none|
|» reward|[object]|false|none|none|
|»» denom|string|false|none|none|
|»» amount|string|false|none|none|
|total|[object]|false|none|total defines the sum of all the rewards.|
|» denom|string|false|none|none|
|» amount|string|false|none|none|

<h2 id="tocS_cosmos.distribution.v1beta1.QueryDelegatorValidatorsResponse">cosmos.distribution.v1beta1.QueryDelegatorValidatorsResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.distribution.v1beta1.querydelegatorvalidatorsresponse"></a>
<a id="schema_cosmos.distribution.v1beta1.QueryDelegatorValidatorsResponse"></a>
<a id="tocScosmos.distribution.v1beta1.querydelegatorvalidatorsresponse"></a>
<a id="tocscosmos.distribution.v1beta1.querydelegatorvalidatorsresponse"></a>

```json
{
  "validators": [
    "string"
  ]
}

```

QueryDelegatorValidatorsResponse is the response type for the
Query/DelegatorValidators RPC method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|validators|[string]|false|none|validators defines the validators a delegator is delegating for.|

<h2 id="tocS_cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressResponse">cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.distribution.v1beta1.querydelegatorwithdrawaddressresponse"></a>
<a id="schema_cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressResponse"></a>
<a id="tocScosmos.distribution.v1beta1.querydelegatorwithdrawaddressresponse"></a>
<a id="tocscosmos.distribution.v1beta1.querydelegatorwithdrawaddressresponse"></a>

```json
{
  "withdrawAddress": "string"
}

```

QueryDelegatorWithdrawAddressResponse is the response type for the
Query/DelegatorWithdrawAddress RPC method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|withdrawAddress|string|false|none|withdraw_address defines the delegator address to query for.|

<h2 id="tocS_cosmos.distribution.v1beta1.QueryParamsResponse">cosmos.distribution.v1beta1.QueryParamsResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.distribution.v1beta1.queryparamsresponse"></a>
<a id="schema_cosmos.distribution.v1beta1.QueryParamsResponse"></a>
<a id="tocScosmos.distribution.v1beta1.queryparamsresponse"></a>
<a id="tocscosmos.distribution.v1beta1.queryparamsresponse"></a>

```json
{
  "params": {
    "communityTax": "string",
    "baseProposerReward": "string",
    "bonusProposerReward": "string",
    "withdrawAddrEnabled": true
  }
}

```

QueryParamsResponse is the response type for the Query/Params RPC method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|params|object|false|none|params defines the parameters of the module.|
|» communityTax|string|false|none|none|
|» baseProposerReward|string|false|none|none|
|» bonusProposerReward|string|false|none|none|
|» withdrawAddrEnabled|boolean|false|none|none|

<h2 id="tocS_cosmos.distribution.v1beta1.QueryValidatorCommissionResponse">cosmos.distribution.v1beta1.QueryValidatorCommissionResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.distribution.v1beta1.queryvalidatorcommissionresponse"></a>
<a id="schema_cosmos.distribution.v1beta1.QueryValidatorCommissionResponse"></a>
<a id="tocScosmos.distribution.v1beta1.queryvalidatorcommissionresponse"></a>
<a id="tocscosmos.distribution.v1beta1.queryvalidatorcommissionresponse"></a>

```json
{
  "commission": {
    "commission": [
      {
        "denom": "string",
        "amount": "string"
      }
    ]
  }
}

```

QueryValidatorCommissionResponse is the response type for the
Query/ValidatorCommission RPC method

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commission|object|false|none|commission defines the commision the validator received.|
|» commission|[object]|false|none|none|
|»» denom|string|false|none|none|
|»» amount|string|false|none|none|

<h2 id="tocS_cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsResponse">cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.distribution.v1beta1.queryvalidatoroutstandingrewardsresponse"></a>
<a id="schema_cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsResponse"></a>
<a id="tocScosmos.distribution.v1beta1.queryvalidatoroutstandingrewardsresponse"></a>
<a id="tocscosmos.distribution.v1beta1.queryvalidatoroutstandingrewardsresponse"></a>

```json
{
  "rewards": {
    "rewards": [
      {
        "denom": "string",
        "amount": "string"
      }
    ]
  }
}

```

QueryValidatorOutstandingRewardsResponse is the response type for the
Query/ValidatorOutstandingRewards RPC method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rewards|object|false|none|ValidatorOutstandingRewards represents outstanding (un-withdrawn) rewards<br>for a validator inexpensive to track, allows simple sanity checks.|
|» rewards|[object]|false|none|none|
|»» denom|string|false|none|none|
|»» amount|string|false|none|none|

<h2 id="tocS_cosmos.distribution.v1beta1.QueryValidatorSlashesResponse">cosmos.distribution.v1beta1.QueryValidatorSlashesResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.distribution.v1beta1.queryvalidatorslashesresponse"></a>
<a id="schema_cosmos.distribution.v1beta1.QueryValidatorSlashesResponse"></a>
<a id="tocScosmos.distribution.v1beta1.queryvalidatorslashesresponse"></a>
<a id="tocscosmos.distribution.v1beta1.queryvalidatorslashesresponse"></a>

```json
{
  "slashes": [
    {
      "validatorPeriod": "string",
      "fraction": "string"
    }
  ],
  "pagination": {
    "nextKey": "string",
    "total": "string"
  }
}

```

QueryValidatorSlashesResponse is the response type for the
Query/ValidatorSlashes RPC method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|slashes|[object]|false|none|slashes defines the slashes the validator received.|
|» validatorPeriod|string(uint64)|false|none|none|
|» fraction|string|false|none|none|
|pagination|object|false|none|pagination defines the pagination in the response.|
|» nextKey|string(byte)|false|none|none|
|» total|string(uint64)|false|none|none|

<h2 id="tocS_cosmos.distribution.v1beta1.ValidatorAccumulatedCommission">cosmos.distribution.v1beta1.ValidatorAccumulatedCommission</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.distribution.v1beta1.validatoraccumulatedcommission"></a>
<a id="schema_cosmos.distribution.v1beta1.ValidatorAccumulatedCommission"></a>
<a id="tocScosmos.distribution.v1beta1.validatoraccumulatedcommission"></a>
<a id="tocscosmos.distribution.v1beta1.validatoraccumulatedcommission"></a>

```json
{
  "commission": [
    {
      "denom": "string",
      "amount": "string"
    }
  ]
}

```

ValidatorAccumulatedCommission represents accumulated commission
for a validator kept as a running counter, can be withdrawn at any time.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commission|[object]|false|none|none|
|» denom|string|false|none|none|
|» amount|string|false|none|none|

<h2 id="tocS_cosmos.distribution.v1beta1.ValidatorOutstandingRewards">cosmos.distribution.v1beta1.ValidatorOutstandingRewards</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.distribution.v1beta1.validatoroutstandingrewards"></a>
<a id="schema_cosmos.distribution.v1beta1.ValidatorOutstandingRewards"></a>
<a id="tocScosmos.distribution.v1beta1.validatoroutstandingrewards"></a>
<a id="tocscosmos.distribution.v1beta1.validatoroutstandingrewards"></a>

```json
{
  "rewards": [
    {
      "denom": "string",
      "amount": "string"
    }
  ]
}

```

ValidatorOutstandingRewards represents outstanding (un-withdrawn) rewards
for a validator inexpensive to track, allows simple sanity checks.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rewards|[object]|false|none|none|
|» denom|string|false|none|none|
|» amount|string|false|none|none|

<h2 id="tocS_cosmos.distribution.v1beta1.ValidatorSlashEvent">cosmos.distribution.v1beta1.ValidatorSlashEvent</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.distribution.v1beta1.validatorslashevent"></a>
<a id="schema_cosmos.distribution.v1beta1.ValidatorSlashEvent"></a>
<a id="tocScosmos.distribution.v1beta1.validatorslashevent"></a>
<a id="tocscosmos.distribution.v1beta1.validatorslashevent"></a>

```json
{
  "validatorPeriod": "string",
  "fraction": "string"
}

```

ValidatorSlashEvent represents a validator slash event.
Height is implicit within the store key.
This is needed to calculate appropriate amount of staking tokens
for delegations which are withdrawn after a slash has occurred.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|validatorPeriod|string(uint64)|false|none|none|
|fraction|string|false|none|none|

<h2 id="tocS_cosmos.evidence.v1beta1.MsgSubmitEvidenceResponse">cosmos.evidence.v1beta1.MsgSubmitEvidenceResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.evidence.v1beta1.msgsubmitevidenceresponse"></a>
<a id="schema_cosmos.evidence.v1beta1.MsgSubmitEvidenceResponse"></a>
<a id="tocScosmos.evidence.v1beta1.msgsubmitevidenceresponse"></a>
<a id="tocscosmos.evidence.v1beta1.msgsubmitevidenceresponse"></a>

```json
{
  "hash": "string"
}

```

MsgSubmitEvidenceResponse defines the Msg/SubmitEvidence response type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hash|string(byte)|false|none|hash defines the hash of the evidence.|

<h2 id="tocS_cosmos.evidence.v1beta1.QueryAllEvidenceResponse">cosmos.evidence.v1beta1.QueryAllEvidenceResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.evidence.v1beta1.queryallevidenceresponse"></a>
<a id="schema_cosmos.evidence.v1beta1.QueryAllEvidenceResponse"></a>
<a id="tocScosmos.evidence.v1beta1.queryallevidenceresponse"></a>
<a id="tocscosmos.evidence.v1beta1.queryallevidenceresponse"></a>

```json
{
  "evidence": [
    {
      "@type": "string",
      "property1": null,
      "property2": null
    }
  ],
  "pagination": {
    "nextKey": "string",
    "total": "string"
  }
}

```

QueryAllEvidenceResponse is the response type for the Query/AllEvidence RPC
method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|evidence|[object]|false|none|evidence returns all evidences.|
|» **additionalProperties**|any|false|none|none|
|» @type|string|false|none|A URL/resource name that uniquely identifies the type of the serialized<br>protocol buffer message. This string must contain at least<br>one "/" character. The last segment of the URL's path must represent<br>the fully qualified name of the type (as in<br>`path/google.protobuf.Duration`). The name should be in a canonical form<br>(e.g., leading "." is not accepted).<br><br>In practice, teams usually precompile into the binary all types that they<br>expect it to use in the context of Any. However, for URLs which use the<br>scheme `http`, `https`, or no scheme, one can optionally set up a type<br>server that maps type URLs to message definitions as follows:<br><br>* If no scheme is provided, `https` is assumed.<br>* An HTTP GET on the URL must yield a [google.protobuf.Type][]<br>  value in binary format, or produce an error.<br>* Applications are allowed to cache lookup results based on the<br>  URL, or have them precompiled into a binary to avoid any<br>  lookup. Therefore, binary compatibility needs to be preserved<br>  on changes to types. (Use versioned type names to manage<br>  breaking changes.)<br><br>Note: this functionality is not currently available in the official<br>protobuf release, and it is not used for type URLs beginning with<br>type.googleapis.com.<br><br>Schemes other than `http`, `https` (or the empty scheme) might be<br>used with implementation specific semantics.|
|pagination|object|false|none|pagination defines the pagination in the response.|
|» nextKey|string(byte)|false|none|none|
|» total|string(uint64)|false|none|none|

<h2 id="tocS_cosmos.evidence.v1beta1.QueryEvidenceResponse">cosmos.evidence.v1beta1.QueryEvidenceResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.evidence.v1beta1.queryevidenceresponse"></a>
<a id="schema_cosmos.evidence.v1beta1.QueryEvidenceResponse"></a>
<a id="tocScosmos.evidence.v1beta1.queryevidenceresponse"></a>
<a id="tocscosmos.evidence.v1beta1.queryevidenceresponse"></a>

```json
{
  "evidence": {
    "@type": "string",
    "property1": null,
    "property2": null
  }
}

```

QueryEvidenceResponse is the response type for the Query/Evidence RPC method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|evidence|object|false|none|`Any` contains an arbitrary serialized protocol buffer message along with a<br>URL that describes the type of the serialized message.<br><br>Protobuf library provides support to pack/unpack Any values in the form<br>of utility functions or additional generated methods of the Any type.<br><br>Example 1: Pack and unpack a message in C++.<br><br>    Foo foo = ...;<br>    Any any;<br>    any.PackFrom(foo);<br>    ...<br>    if (any.UnpackTo(&foo)) {<br>      ...<br>    }<br><br>Example 2: Pack and unpack a message in Java.<br><br>    Foo foo = ...;<br>    Any any = Any.pack(foo);<br>    ...<br>    if (any.is(Foo.class)) {<br>      foo = any.unpack(Foo.class);<br>    }<br><br> Example 3: Pack and unpack a message in Python.<br><br>    foo = Foo(...)<br>    any = Any()<br>    any.Pack(foo)<br>    ...<br>    if any.Is(Foo.DESCRIPTOR):<br>      any.Unpack(foo)<br>      ...<br><br> Example 4: Pack and unpack a message in Go<br><br>     foo := &pb.Foo{...}<br>     any, err := anypb.New(foo)<br>     if err != nil {<br>       ...<br>     }<br>     ...<br>     foo := &pb.Foo{}<br>     if err := any.UnmarshalTo(foo); err != nil {<br>       ...<br>     }<br><br>The pack methods provided by protobuf library will by default use<br>'type.googleapis.com/full.type.name' as the type URL and the unpack<br>methods only use the fully qualified type name after the last '/'<br>in the type URL, for example "foo.bar.com/x/y.z" will yield type<br>name "y.z".<br><br><br>JSON<br>====<br>The JSON representation of an `Any` value uses the regular<br>representation of the deserialized, embedded message, with an<br>additional field `@type` which contains the type URL. Example:<br><br>    package google.profile;<br>    message Person {<br>      string first_name = 1;<br>      string last_name = 2;<br>    }<br><br>    {<br>      "@type": "type.googleapis.com/google.profile.Person",<br>      "firstName": <string>,<br>      "lastName": <string><br>    }<br><br>If the embedded message type is well-known and has a custom JSON<br>representation, that representation will be embedded adding a field<br>`value` which holds the custom JSON in addition to the `@type`<br>field. Example (for message [google.protobuf.Duration][]):<br><br>    {<br>      "@type": "type.googleapis.com/google.protobuf.Duration",<br>      "value": "1.212s"<br>    }|
|» **additionalProperties**|any|false|none|none|
|» @type|string|false|none|A URL/resource name that uniquely identifies the type of the serialized<br>protocol buffer message. This string must contain at least<br>one "/" character. The last segment of the URL's path must represent<br>the fully qualified name of the type (as in<br>`path/google.protobuf.Duration`). The name should be in a canonical form<br>(e.g., leading "." is not accepted).<br><br>In practice, teams usually precompile into the binary all types that they<br>expect it to use in the context of Any. However, for URLs which use the<br>scheme `http`, `https`, or no scheme, one can optionally set up a type<br>server that maps type URLs to message definitions as follows:<br><br>* If no scheme is provided, `https` is assumed.<br>* An HTTP GET on the URL must yield a [google.protobuf.Type][]<br>  value in binary format, or produce an error.<br>* Applications are allowed to cache lookup results based on the<br>  URL, or have them precompiled into a binary to avoid any<br>  lookup. Therefore, binary compatibility needs to be preserved<br>  on changes to types. (Use versioned type names to manage<br>  breaking changes.)<br><br>Note: this functionality is not currently available in the official<br>protobuf release, and it is not used for type URLs beginning with<br>type.googleapis.com.<br><br>Schemes other than `http`, `https` (or the empty scheme) might be<br>used with implementation specific semantics.|

<h2 id="tocS_cosmos.feegrant.v1beta1.Grant">cosmos.feegrant.v1beta1.Grant</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.feegrant.v1beta1.grant"></a>
<a id="schema_cosmos.feegrant.v1beta1.Grant"></a>
<a id="tocScosmos.feegrant.v1beta1.grant"></a>
<a id="tocscosmos.feegrant.v1beta1.grant"></a>

```json
{
  "granter": "string",
  "grantee": "string",
  "allowance": {
    "@type": "string",
    "property1": null,
    "property2": null
  }
}

```

Grant is stored in the KVStore to record a grant with full context

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|granter|string|false|none|granter is the address of the user granting an allowance of their funds.|
|grantee|string|false|none|grantee is the address of the user being granted an allowance of another user's funds.|
|allowance|object|false|none|allowance can be any of basic and filtered fee allowance.|
|» **additionalProperties**|any|false|none|none|
|» @type|string|false|none|A URL/resource name that uniquely identifies the type of the serialized<br>protocol buffer message. This string must contain at least<br>one "/" character. The last segment of the URL's path must represent<br>the fully qualified name of the type (as in<br>`path/google.protobuf.Duration`). The name should be in a canonical form<br>(e.g., leading "." is not accepted).<br><br>In practice, teams usually precompile into the binary all types that they<br>expect it to use in the context of Any. However, for URLs which use the<br>scheme `http`, `https`, or no scheme, one can optionally set up a type<br>server that maps type URLs to message definitions as follows:<br><br>* If no scheme is provided, `https` is assumed.<br>* An HTTP GET on the URL must yield a [google.protobuf.Type][]<br>  value in binary format, or produce an error.<br>* Applications are allowed to cache lookup results based on the<br>  URL, or have them precompiled into a binary to avoid any<br>  lookup. Therefore, binary compatibility needs to be preserved<br>  on changes to types. (Use versioned type names to manage<br>  breaking changes.)<br><br>Note: this functionality is not currently available in the official<br>protobuf release, and it is not used for type URLs beginning with<br>type.googleapis.com.<br><br>Schemes other than `http`, `https` (or the empty scheme) might be<br>used with implementation specific semantics.|

<h2 id="tocS_cosmos.feegrant.v1beta1.MsgGrantAllowanceResponse">cosmos.feegrant.v1beta1.MsgGrantAllowanceResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.feegrant.v1beta1.msggrantallowanceresponse"></a>
<a id="schema_cosmos.feegrant.v1beta1.MsgGrantAllowanceResponse"></a>
<a id="tocScosmos.feegrant.v1beta1.msggrantallowanceresponse"></a>
<a id="tocscosmos.feegrant.v1beta1.msggrantallowanceresponse"></a>

```json
{}

```

MsgGrantAllowanceResponse defines the Msg/GrantAllowanceResponse response type.

### Properties

*None*

<h2 id="tocS_cosmos.feegrant.v1beta1.MsgRevokeAllowanceResponse">cosmos.feegrant.v1beta1.MsgRevokeAllowanceResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.feegrant.v1beta1.msgrevokeallowanceresponse"></a>
<a id="schema_cosmos.feegrant.v1beta1.MsgRevokeAllowanceResponse"></a>
<a id="tocScosmos.feegrant.v1beta1.msgrevokeallowanceresponse"></a>
<a id="tocscosmos.feegrant.v1beta1.msgrevokeallowanceresponse"></a>

```json
{}

```

MsgRevokeAllowanceResponse defines the Msg/RevokeAllowanceResponse response type.

### Properties

*None*

<h2 id="tocS_cosmos.feegrant.v1beta1.QueryAllowanceResponse">cosmos.feegrant.v1beta1.QueryAllowanceResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.feegrant.v1beta1.queryallowanceresponse"></a>
<a id="schema_cosmos.feegrant.v1beta1.QueryAllowanceResponse"></a>
<a id="tocScosmos.feegrant.v1beta1.queryallowanceresponse"></a>
<a id="tocscosmos.feegrant.v1beta1.queryallowanceresponse"></a>

```json
{
  "allowance": {
    "granter": "string",
    "grantee": "string",
    "allowance": {
      "@type": "string",
      "property1": null,
      "property2": null
    }
  }
}

```

QueryAllowanceResponse is the response type for the Query/Allowance RPC method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowance|object|false|none|allowance is a allowance granted for grantee by granter.|
|» granter|string|false|none|granter is the address of the user granting an allowance of their funds.|
|» grantee|string|false|none|grantee is the address of the user being granted an allowance of another user's funds.|
|» allowance|object|false|none|allowance can be any of basic and filtered fee allowance.|
|»» **additionalProperties**|any|false|none|none|
|»» @type|string|false|none|A URL/resource name that uniquely identifies the type of the serialized<br>protocol buffer message. This string must contain at least<br>one "/" character. The last segment of the URL's path must represent<br>the fully qualified name of the type (as in<br>`path/google.protobuf.Duration`). The name should be in a canonical form<br>(e.g., leading "." is not accepted).<br><br>In practice, teams usually precompile into the binary all types that they<br>expect it to use in the context of Any. However, for URLs which use the<br>scheme `http`, `https`, or no scheme, one can optionally set up a type<br>server that maps type URLs to message definitions as follows:<br><br>* If no scheme is provided, `https` is assumed.<br>* An HTTP GET on the URL must yield a [google.protobuf.Type][]<br>  value in binary format, or produce an error.<br>* Applications are allowed to cache lookup results based on the<br>  URL, or have them precompiled into a binary to avoid any<br>  lookup. Therefore, binary compatibility needs to be preserved<br>  on changes to types. (Use versioned type names to manage<br>  breaking changes.)<br><br>Note: this functionality is not currently available in the official<br>protobuf release, and it is not used for type URLs beginning with<br>type.googleapis.com.<br><br>Schemes other than `http`, `https` (or the empty scheme) might be<br>used with implementation specific semantics.|

<h2 id="tocS_cosmos.feegrant.v1beta1.QueryAllowancesResponse">cosmos.feegrant.v1beta1.QueryAllowancesResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.feegrant.v1beta1.queryallowancesresponse"></a>
<a id="schema_cosmos.feegrant.v1beta1.QueryAllowancesResponse"></a>
<a id="tocScosmos.feegrant.v1beta1.queryallowancesresponse"></a>
<a id="tocscosmos.feegrant.v1beta1.queryallowancesresponse"></a>

```json
{
  "allowances": [
    {
      "granter": "string",
      "grantee": "string",
      "allowance": {
        "@type": "string",
        "property1": null,
        "property2": null
      }
    }
  ],
  "pagination": {
    "nextKey": "string",
    "total": "string"
  }
}

```

QueryAllowancesResponse is the response type for the Query/Allowances RPC method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowances|[object]|false|none|allowances are allowance's granted for grantee by granter.|
|» Grant is stored in the KVStore to record a grant with full context|object|false|none|none|
|»» granter|string|false|none|granter is the address of the user granting an allowance of their funds.|
|»» grantee|string|false|none|grantee is the address of the user being granted an allowance of another user's funds.|
|»» allowance|object|false|none|allowance can be any of basic and filtered fee allowance.|
|»»» **additionalProperties**|any|false|none|none|
|»»» @type|string|false|none|A URL/resource name that uniquely identifies the type of the serialized<br>protocol buffer message. This string must contain at least<br>one "/" character. The last segment of the URL's path must represent<br>the fully qualified name of the type (as in<br>`path/google.protobuf.Duration`). The name should be in a canonical form<br>(e.g., leading "." is not accepted).<br><br>In practice, teams usually precompile into the binary all types that they<br>expect it to use in the context of Any. However, for URLs which use the<br>scheme `http`, `https`, or no scheme, one can optionally set up a type<br>server that maps type URLs to message definitions as follows:<br><br>* If no scheme is provided, `https` is assumed.<br>* An HTTP GET on the URL must yield a [google.protobuf.Type][]<br>  value in binary format, or produce an error.<br>* Applications are allowed to cache lookup results based on the<br>  URL, or have them precompiled into a binary to avoid any<br>  lookup. Therefore, binary compatibility needs to be preserved<br>  on changes to types. (Use versioned type names to manage<br>  breaking changes.)<br><br>Note: this functionality is not currently available in the official<br>protobuf release, and it is not used for type URLs beginning with<br>type.googleapis.com.<br><br>Schemes other than `http`, `https` (or the empty scheme) might be<br>used with implementation specific semantics.|
|pagination|object|false|none|pagination defines an pagination for the response.|
|» nextKey|string(byte)|false|none|none|
|» total|string(uint64)|false|none|none|

<h2 id="tocS_cosmos.gov.v1beta1.Deposit">cosmos.gov.v1beta1.Deposit</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.gov.v1beta1.deposit"></a>
<a id="schema_cosmos.gov.v1beta1.Deposit"></a>
<a id="tocScosmos.gov.v1beta1.deposit"></a>
<a id="tocscosmos.gov.v1beta1.deposit"></a>

```json
{
  "proposalId": "string",
  "depositor": "string",
  "amount": [
    {
      "denom": "string",
      "amount": "string"
    }
  ]
}

```

Deposit defines an amount deposited by an account address to an active
proposal.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|proposalId|string(uint64)|false|none|none|
|depositor|string|false|none|none|
|amount|[object]|false|none|none|
|» denom|string|false|none|none|
|» amount|string|false|none|none|

<h2 id="tocS_cosmos.gov.v1beta1.DepositParams">cosmos.gov.v1beta1.DepositParams</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.gov.v1beta1.depositparams"></a>
<a id="schema_cosmos.gov.v1beta1.DepositParams"></a>
<a id="tocScosmos.gov.v1beta1.depositparams"></a>
<a id="tocscosmos.gov.v1beta1.depositparams"></a>

```json
{
  "minDeposit": [
    {
      "denom": "string",
      "amount": "string"
    }
  ],
  "maxDepositPeriod": "string"
}

```

DepositParams defines the params for deposits on governance proposals.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|minDeposit|[object]|false|none|Minimum deposit for a proposal to enter voting period.|
|» denom|string|false|none|none|
|» amount|string|false|none|none|
|maxDepositPeriod|string|false|none|Maximum period for Atom holders to deposit on a proposal. Initial value: 2<br> months.|

<h2 id="tocS_cosmos.gov.v1beta1.MsgDepositResponse">cosmos.gov.v1beta1.MsgDepositResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.gov.v1beta1.msgdepositresponse"></a>
<a id="schema_cosmos.gov.v1beta1.MsgDepositResponse"></a>
<a id="tocScosmos.gov.v1beta1.msgdepositresponse"></a>
<a id="tocscosmos.gov.v1beta1.msgdepositresponse"></a>

```json
{}

```

MsgDepositResponse defines the Msg/Deposit response type.

### Properties

*None*

<h2 id="tocS_cosmos.gov.v1beta1.MsgSubmitProposalResponse">cosmos.gov.v1beta1.MsgSubmitProposalResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.gov.v1beta1.msgsubmitproposalresponse"></a>
<a id="schema_cosmos.gov.v1beta1.MsgSubmitProposalResponse"></a>
<a id="tocScosmos.gov.v1beta1.msgsubmitproposalresponse"></a>
<a id="tocscosmos.gov.v1beta1.msgsubmitproposalresponse"></a>

```json
{
  "proposalId": "string"
}

```

MsgSubmitProposalResponse defines the Msg/SubmitProposal response type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|proposalId|string(uint64)|false|none|none|

<h2 id="tocS_cosmos.gov.v1beta1.MsgVoteResponse">cosmos.gov.v1beta1.MsgVoteResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.gov.v1beta1.msgvoteresponse"></a>
<a id="schema_cosmos.gov.v1beta1.MsgVoteResponse"></a>
<a id="tocScosmos.gov.v1beta1.msgvoteresponse"></a>
<a id="tocscosmos.gov.v1beta1.msgvoteresponse"></a>

```json
{}

```

MsgVoteResponse defines the Msg/Vote response type.

### Properties

*None*

<h2 id="tocS_cosmos.gov.v1beta1.MsgVoteWeightedResponse">cosmos.gov.v1beta1.MsgVoteWeightedResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.gov.v1beta1.msgvoteweightedresponse"></a>
<a id="schema_cosmos.gov.v1beta1.MsgVoteWeightedResponse"></a>
<a id="tocScosmos.gov.v1beta1.msgvoteweightedresponse"></a>
<a id="tocscosmos.gov.v1beta1.msgvoteweightedresponse"></a>

```json
{}

```

MsgVoteWeightedResponse defines the Msg/VoteWeighted response type.

Since: cosmos-sdk 0.43

### Properties

*None*

<h2 id="tocS_cosmos.gov.v1beta1.Proposal">cosmos.gov.v1beta1.Proposal</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.gov.v1beta1.proposal"></a>
<a id="schema_cosmos.gov.v1beta1.Proposal"></a>
<a id="tocScosmos.gov.v1beta1.proposal"></a>
<a id="tocscosmos.gov.v1beta1.proposal"></a>

```json
{
  "proposalId": "string",
  "content": {
    "@type": "string",
    "property1": null,
    "property2": null
  },
  "status": "PROPOSAL_STATUS_UNSPECIFIED",
  "finalTallyResult": {
    "yes": "string",
    "abstain": "string",
    "no": "string",
    "noWithVeto": "string"
  },
  "submitTime": "2019-08-24T14:15:22Z",
  "depositEndTime": "2019-08-24T14:15:22Z",
  "totalDeposit": [
    {
      "denom": "string",
      "amount": "string"
    }
  ],
  "votingStartTime": "2019-08-24T14:15:22Z",
  "votingEndTime": "2019-08-24T14:15:22Z"
}

```

Proposal defines the core field members of a governance proposal.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|proposalId|string(uint64)|false|none|none|
|content|object|false|none|`Any` contains an arbitrary serialized protocol buffer message along with a<br>URL that describes the type of the serialized message.<br><br>Protobuf library provides support to pack/unpack Any values in the form<br>of utility functions or additional generated methods of the Any type.<br><br>Example 1: Pack and unpack a message in C++.<br><br>    Foo foo = ...;<br>    Any any;<br>    any.PackFrom(foo);<br>    ...<br>    if (any.UnpackTo(&foo)) {<br>      ...<br>    }<br><br>Example 2: Pack and unpack a message in Java.<br><br>    Foo foo = ...;<br>    Any any = Any.pack(foo);<br>    ...<br>    if (any.is(Foo.class)) {<br>      foo = any.unpack(Foo.class);<br>    }<br><br> Example 3: Pack and unpack a message in Python.<br><br>    foo = Foo(...)<br>    any = Any()<br>    any.Pack(foo)<br>    ...<br>    if any.Is(Foo.DESCRIPTOR):<br>      any.Unpack(foo)<br>      ...<br><br> Example 4: Pack and unpack a message in Go<br><br>     foo := &pb.Foo{...}<br>     any, err := anypb.New(foo)<br>     if err != nil {<br>       ...<br>     }<br>     ...<br>     foo := &pb.Foo{}<br>     if err := any.UnmarshalTo(foo); err != nil {<br>       ...<br>     }<br><br>The pack methods provided by protobuf library will by default use<br>'type.googleapis.com/full.type.name' as the type URL and the unpack<br>methods only use the fully qualified type name after the last '/'<br>in the type URL, for example "foo.bar.com/x/y.z" will yield type<br>name "y.z".<br><br><br>JSON<br>====<br>The JSON representation of an `Any` value uses the regular<br>representation of the deserialized, embedded message, with an<br>additional field `@type` which contains the type URL. Example:<br><br>    package google.profile;<br>    message Person {<br>      string first_name = 1;<br>      string last_name = 2;<br>    }<br><br>    {<br>      "@type": "type.googleapis.com/google.profile.Person",<br>      "firstName": <string>,<br>      "lastName": <string><br>    }<br><br>If the embedded message type is well-known and has a custom JSON<br>representation, that representation will be embedded adding a field<br>`value` which holds the custom JSON in addition to the `@type`<br>field. Example (for message [google.protobuf.Duration][]):<br><br>    {<br>      "@type": "type.googleapis.com/google.protobuf.Duration",<br>      "value": "1.212s"<br>    }|
|» **additionalProperties**|any|false|none|none|
|» @type|string|false|none|A URL/resource name that uniquely identifies the type of the serialized<br>protocol buffer message. This string must contain at least<br>one "/" character. The last segment of the URL's path must represent<br>the fully qualified name of the type (as in<br>`path/google.protobuf.Duration`). The name should be in a canonical form<br>(e.g., leading "." is not accepted).<br><br>In practice, teams usually precompile into the binary all types that they<br>expect it to use in the context of Any. However, for URLs which use the<br>scheme `http`, `https`, or no scheme, one can optionally set up a type<br>server that maps type URLs to message definitions as follows:<br><br>* If no scheme is provided, `https` is assumed.<br>* An HTTP GET on the URL must yield a [google.protobuf.Type][]<br>  value in binary format, or produce an error.<br>* Applications are allowed to cache lookup results based on the<br>  URL, or have them precompiled into a binary to avoid any<br>  lookup. Therefore, binary compatibility needs to be preserved<br>  on changes to types. (Use versioned type names to manage<br>  breaking changes.)<br><br>Note: this functionality is not currently available in the official<br>protobuf release, and it is not used for type URLs beginning with<br>type.googleapis.com.<br><br>Schemes other than `http`, `https` (or the empty scheme) might be<br>used with implementation specific semantics.|
|status|string|false|none|ProposalStatus enumerates the valid statuses of a proposal.<br><br> - PROPOSAL_STATUS_UNSPECIFIED: PROPOSAL_STATUS_UNSPECIFIED defines the default propopsal status.<br> - PROPOSAL_STATUS_DEPOSIT_PERIOD: PROPOSAL_STATUS_DEPOSIT_PERIOD defines a proposal status during the deposit<br>period.<br> - PROPOSAL_STATUS_VOTING_PERIOD: PROPOSAL_STATUS_VOTING_PERIOD defines a proposal status during the voting<br>period.<br> - PROPOSAL_STATUS_PASSED: PROPOSAL_STATUS_PASSED defines a proposal status of a proposal that has<br>passed.<br> - PROPOSAL_STATUS_REJECTED: PROPOSAL_STATUS_REJECTED defines a proposal status of a proposal that has<br>been rejected.<br> - PROPOSAL_STATUS_FAILED: PROPOSAL_STATUS_FAILED defines a proposal status of a proposal that has<br>failed.|
|finalTallyResult|object|false|none|TallyResult defines a standard tally for a governance proposal.|
|» yes|string|false|none|none|
|» abstain|string|false|none|none|
|» no|string|false|none|none|
|» noWithVeto|string|false|none|none|
|submitTime|string(date-time)|false|none|none|
|depositEndTime|string(date-time)|false|none|none|
|totalDeposit|[object]|false|none|none|
|» denom|string|false|none|none|
|» amount|string|false|none|none|
|votingStartTime|string(date-time)|false|none|none|
|votingEndTime|string(date-time)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|PROPOSAL_STATUS_UNSPECIFIED|
|status|PROPOSAL_STATUS_DEPOSIT_PERIOD|
|status|PROPOSAL_STATUS_VOTING_PERIOD|
|status|PROPOSAL_STATUS_PASSED|
|status|PROPOSAL_STATUS_REJECTED|
|status|PROPOSAL_STATUS_FAILED|

<h2 id="tocS_cosmos.gov.v1beta1.ProposalStatus">cosmos.gov.v1beta1.ProposalStatus</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.gov.v1beta1.proposalstatus"></a>
<a id="schema_cosmos.gov.v1beta1.ProposalStatus"></a>
<a id="tocScosmos.gov.v1beta1.proposalstatus"></a>
<a id="tocscosmos.gov.v1beta1.proposalstatus"></a>

```json
"PROPOSAL_STATUS_UNSPECIFIED"

```

ProposalStatus enumerates the valid statuses of a proposal.

 - PROPOSAL_STATUS_UNSPECIFIED: PROPOSAL_STATUS_UNSPECIFIED defines the default propopsal status.
 - PROPOSAL_STATUS_DEPOSIT_PERIOD: PROPOSAL_STATUS_DEPOSIT_PERIOD defines a proposal status during the deposit
period.
 - PROPOSAL_STATUS_VOTING_PERIOD: PROPOSAL_STATUS_VOTING_PERIOD defines a proposal status during the voting
period.
 - PROPOSAL_STATUS_PASSED: PROPOSAL_STATUS_PASSED defines a proposal status of a proposal that has
passed.
 - PROPOSAL_STATUS_REJECTED: PROPOSAL_STATUS_REJECTED defines a proposal status of a proposal that has
been rejected.
 - PROPOSAL_STATUS_FAILED: PROPOSAL_STATUS_FAILED defines a proposal status of a proposal that has
failed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|ProposalStatus enumerates the valid statuses of a proposal.<br><br> - PROPOSAL_STATUS_UNSPECIFIED: PROPOSAL_STATUS_UNSPECIFIED defines the default propopsal status.<br> - PROPOSAL_STATUS_DEPOSIT_PERIOD: PROPOSAL_STATUS_DEPOSIT_PERIOD defines a proposal status during the deposit<br>period.<br> - PROPOSAL_STATUS_VOTING_PERIOD: PROPOSAL_STATUS_VOTING_PERIOD defines a proposal status during the voting<br>period.<br> - PROPOSAL_STATUS_PASSED: PROPOSAL_STATUS_PASSED defines a proposal status of a proposal that has<br>passed.<br> - PROPOSAL_STATUS_REJECTED: PROPOSAL_STATUS_REJECTED defines a proposal status of a proposal that has<br>been rejected.<br> - PROPOSAL_STATUS_FAILED: PROPOSAL_STATUS_FAILED defines a proposal status of a proposal that has<br>failed.|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|PROPOSAL_STATUS_UNSPECIFIED|
|*anonymous*|PROPOSAL_STATUS_DEPOSIT_PERIOD|
|*anonymous*|PROPOSAL_STATUS_VOTING_PERIOD|
|*anonymous*|PROPOSAL_STATUS_PASSED|
|*anonymous*|PROPOSAL_STATUS_REJECTED|
|*anonymous*|PROPOSAL_STATUS_FAILED|

<h2 id="tocS_cosmos.gov.v1beta1.QueryDepositResponse">cosmos.gov.v1beta1.QueryDepositResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.gov.v1beta1.querydepositresponse"></a>
<a id="schema_cosmos.gov.v1beta1.QueryDepositResponse"></a>
<a id="tocScosmos.gov.v1beta1.querydepositresponse"></a>
<a id="tocscosmos.gov.v1beta1.querydepositresponse"></a>

```json
{
  "deposit": {
    "proposalId": "string",
    "depositor": "string",
    "amount": [
      {
        "denom": "string",
        "amount": "string"
      }
    ]
  }
}

```

QueryDepositResponse is the response type for the Query/Deposit RPC method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deposit|object|false|none|Deposit defines an amount deposited by an account address to an active<br>proposal.|
|» proposalId|string(uint64)|false|none|none|
|» depositor|string|false|none|none|
|» amount|[object]|false|none|none|
|»» denom|string|false|none|none|
|»» amount|string|false|none|none|

<h2 id="tocS_cosmos.gov.v1beta1.QueryDepositsResponse">cosmos.gov.v1beta1.QueryDepositsResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.gov.v1beta1.querydepositsresponse"></a>
<a id="schema_cosmos.gov.v1beta1.QueryDepositsResponse"></a>
<a id="tocScosmos.gov.v1beta1.querydepositsresponse"></a>
<a id="tocscosmos.gov.v1beta1.querydepositsresponse"></a>

```json
{
  "deposits": [
    {
      "proposalId": "string",
      "depositor": "string",
      "amount": [
        {
          "denom": "string",
          "amount": "string"
        }
      ]
    }
  ],
  "pagination": {
    "nextKey": "string",
    "total": "string"
  }
}

```

QueryDepositsResponse is the response type for the Query/Deposits RPC method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deposits|[object]|false|none|none|
|» proposalId|string(uint64)|false|none|none|
|» depositor|string|false|none|none|
|» amount|[object]|false|none|none|
|»» denom|string|false|none|none|
|»» amount|string|false|none|none|
|pagination|object|false|none|pagination defines the pagination in the response.|
|» nextKey|string(byte)|false|none|none|
|» total|string(uint64)|false|none|none|

<h2 id="tocS_cosmos.gov.v1beta1.QueryParamsResponse">cosmos.gov.v1beta1.QueryParamsResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.gov.v1beta1.queryparamsresponse"></a>
<a id="schema_cosmos.gov.v1beta1.QueryParamsResponse"></a>
<a id="tocScosmos.gov.v1beta1.queryparamsresponse"></a>
<a id="tocscosmos.gov.v1beta1.queryparamsresponse"></a>

```json
{
  "votingParams": {
    "votingPeriod": "string"
  },
  "depositParams": {
    "minDeposit": [
      {
        "denom": "string",
        "amount": "string"
      }
    ],
    "maxDepositPeriod": "string"
  },
  "tallyParams": {
    "quorum": "string",
    "threshold": "string",
    "vetoThreshold": "string"
  }
}

```

QueryParamsResponse is the response type for the Query/Params RPC method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|votingParams|object|false|none|voting_params defines the parameters related to voting.|
|» votingPeriod|string|false|none|Length of the voting period.|
|depositParams|object|false|none|deposit_params defines the parameters related to deposit.|
|» minDeposit|[object]|false|none|Minimum deposit for a proposal to enter voting period.|
|»» denom|string|false|none|none|
|»» amount|string|false|none|none|
|» maxDepositPeriod|string|false|none|Maximum period for Atom holders to deposit on a proposal. Initial value: 2<br> months.|
|tallyParams|object|false|none|tally_params defines the parameters related to tally.|
|» quorum|string(byte)|false|none|Minimum percentage of total stake needed to vote for a result to be<br> considered valid.|
|» threshold|string(byte)|false|none|Minimum proportion of Yes votes for proposal to pass. Default value: 0.5.|
|» vetoThreshold|string(byte)|false|none|Minimum value of Veto votes to Total votes ratio for proposal to be<br> vetoed. Default value: 1/3.|

<h2 id="tocS_cosmos.gov.v1beta1.QueryProposalResponse">cosmos.gov.v1beta1.QueryProposalResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.gov.v1beta1.queryproposalresponse"></a>
<a id="schema_cosmos.gov.v1beta1.QueryProposalResponse"></a>
<a id="tocScosmos.gov.v1beta1.queryproposalresponse"></a>
<a id="tocscosmos.gov.v1beta1.queryproposalresponse"></a>

```json
{
  "proposal": {
    "proposalId": "string",
    "content": {
      "@type": "string",
      "property1": null,
      "property2": null
    },
    "status": "PROPOSAL_STATUS_UNSPECIFIED",
    "finalTallyResult": {
      "yes": "string",
      "abstain": "string",
      "no": "string",
      "noWithVeto": "string"
    },
    "submitTime": "2019-08-24T14:15:22Z",
    "depositEndTime": "2019-08-24T14:15:22Z",
    "totalDeposit": [
      {
        "denom": "string",
        "amount": "string"
      }
    ],
    "votingStartTime": "2019-08-24T14:15:22Z",
    "votingEndTime": "2019-08-24T14:15:22Z"
  }
}

```

QueryProposalResponse is the response type for the Query/Proposal RPC method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|proposal|object|false|none|Proposal defines the core field members of a governance proposal.|
|» proposalId|string(uint64)|false|none|none|
|» content|object|false|none|`Any` contains an arbitrary serialized protocol buffer message along with a<br>URL that describes the type of the serialized message.<br><br>Protobuf library provides support to pack/unpack Any values in the form<br>of utility functions or additional generated methods of the Any type.<br><br>Example 1: Pack and unpack a message in C++.<br><br>    Foo foo = ...;<br>    Any any;<br>    any.PackFrom(foo);<br>    ...<br>    if (any.UnpackTo(&foo)) {<br>      ...<br>    }<br><br>Example 2: Pack and unpack a message in Java.<br><br>    Foo foo = ...;<br>    Any any = Any.pack(foo);<br>    ...<br>    if (any.is(Foo.class)) {<br>      foo = any.unpack(Foo.class);<br>    }<br><br> Example 3: Pack and unpack a message in Python.<br><br>    foo = Foo(...)<br>    any = Any()<br>    any.Pack(foo)<br>    ...<br>    if any.Is(Foo.DESCRIPTOR):<br>      any.Unpack(foo)<br>      ...<br><br> Example 4: Pack and unpack a message in Go<br><br>     foo := &pb.Foo{...}<br>     any, err := anypb.New(foo)<br>     if err != nil {<br>       ...<br>     }<br>     ...<br>     foo := &pb.Foo{}<br>     if err := any.UnmarshalTo(foo); err != nil {<br>       ...<br>     }<br><br>The pack methods provided by protobuf library will by default use<br>'type.googleapis.com/full.type.name' as the type URL and the unpack<br>methods only use the fully qualified type name after the last '/'<br>in the type URL, for example "foo.bar.com/x/y.z" will yield type<br>name "y.z".<br><br><br>JSON<br>====<br>The JSON representation of an `Any` value uses the regular<br>representation of the deserialized, embedded message, with an<br>additional field `@type` which contains the type URL. Example:<br><br>    package google.profile;<br>    message Person {<br>      string first_name = 1;<br>      string last_name = 2;<br>    }<br><br>    {<br>      "@type": "type.googleapis.com/google.profile.Person",<br>      "firstName": <string>,<br>      "lastName": <string><br>    }<br><br>If the embedded message type is well-known and has a custom JSON<br>representation, that representation will be embedded adding a field<br>`value` which holds the custom JSON in addition to the `@type`<br>field. Example (for message [google.protobuf.Duration][]):<br><br>    {<br>      "@type": "type.googleapis.com/google.protobuf.Duration",<br>      "value": "1.212s"<br>    }|
|»» **additionalProperties**|any|false|none|none|
|»» @type|string|false|none|A URL/resource name that uniquely identifies the type of the serialized<br>protocol buffer message. This string must contain at least<br>one "/" character. The last segment of the URL's path must represent<br>the fully qualified name of the type (as in<br>`path/google.protobuf.Duration`). The name should be in a canonical form<br>(e.g., leading "." is not accepted).<br><br>In practice, teams usually precompile into the binary all types that they<br>expect it to use in the context of Any. However, for URLs which use the<br>scheme `http`, `https`, or no scheme, one can optionally set up a type<br>server that maps type URLs to message definitions as follows:<br><br>* If no scheme is provided, `https` is assumed.<br>* An HTTP GET on the URL must yield a [google.protobuf.Type][]<br>  value in binary format, or produce an error.<br>* Applications are allowed to cache lookup results based on the<br>  URL, or have them precompiled into a binary to avoid any<br>  lookup. Therefore, binary compatibility needs to be preserved<br>  on changes to types. (Use versioned type names to manage<br>  breaking changes.)<br><br>Note: this functionality is not currently available in the official<br>protobuf release, and it is not used for type URLs beginning with<br>type.googleapis.com.<br><br>Schemes other than `http`, `https` (or the empty scheme) might be<br>used with implementation specific semantics.|
|» status|string|false|none|ProposalStatus enumerates the valid statuses of a proposal.<br><br> - PROPOSAL_STATUS_UNSPECIFIED: PROPOSAL_STATUS_UNSPECIFIED defines the default propopsal status.<br> - PROPOSAL_STATUS_DEPOSIT_PERIOD: PROPOSAL_STATUS_DEPOSIT_PERIOD defines a proposal status during the deposit<br>period.<br> - PROPOSAL_STATUS_VOTING_PERIOD: PROPOSAL_STATUS_VOTING_PERIOD defines a proposal status during the voting<br>period.<br> - PROPOSAL_STATUS_PASSED: PROPOSAL_STATUS_PASSED defines a proposal status of a proposal that has<br>passed.<br> - PROPOSAL_STATUS_REJECTED: PROPOSAL_STATUS_REJECTED defines a proposal status of a proposal that has<br>been rejected.<br> - PROPOSAL_STATUS_FAILED: PROPOSAL_STATUS_FAILED defines a proposal status of a proposal that has<br>failed.|
|» finalTallyResult|object|false|none|TallyResult defines a standard tally for a governance proposal.|
|»» yes|string|false|none|none|
|»» abstain|string|false|none|none|
|»» no|string|false|none|none|
|»» noWithVeto|string|false|none|none|
|» submitTime|string(date-time)|false|none|none|
|» depositEndTime|string(date-time)|false|none|none|
|» totalDeposit|[object]|false|none|none|
|»» denom|string|false|none|none|
|»» amount|string|false|none|none|
|» votingStartTime|string(date-time)|false|none|none|
|» votingEndTime|string(date-time)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|PROPOSAL_STATUS_UNSPECIFIED|
|status|PROPOSAL_STATUS_DEPOSIT_PERIOD|
|status|PROPOSAL_STATUS_VOTING_PERIOD|
|status|PROPOSAL_STATUS_PASSED|
|status|PROPOSAL_STATUS_REJECTED|
|status|PROPOSAL_STATUS_FAILED|

<h2 id="tocS_cosmos.gov.v1beta1.QueryProposalsResponse">cosmos.gov.v1beta1.QueryProposalsResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.gov.v1beta1.queryproposalsresponse"></a>
<a id="schema_cosmos.gov.v1beta1.QueryProposalsResponse"></a>
<a id="tocScosmos.gov.v1beta1.queryproposalsresponse"></a>
<a id="tocscosmos.gov.v1beta1.queryproposalsresponse"></a>

```json
{
  "proposals": [
    {
      "proposalId": "string",
      "content": {
        "@type": "string",
        "property1": null,
        "property2": null
      },
      "status": "PROPOSAL_STATUS_UNSPECIFIED",
      "finalTallyResult": {
        "yes": "string",
        "abstain": "string",
        "no": "string",
        "noWithVeto": "string"
      },
      "submitTime": "2019-08-24T14:15:22Z",
      "depositEndTime": "2019-08-24T14:15:22Z",
      "totalDeposit": [
        {
          "denom": "string",
          "amount": "string"
        }
      ],
      "votingStartTime": "2019-08-24T14:15:22Z",
      "votingEndTime": "2019-08-24T14:15:22Z"
    }
  ],
  "pagination": {
    "nextKey": "string",
    "total": "string"
  }
}

```

QueryProposalsResponse is the response type for the Query/Proposals RPC
method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|proposals|[object]|false|none|none|
|» proposalId|string(uint64)|false|none|none|
|» content|object|false|none|`Any` contains an arbitrary serialized protocol buffer message along with a<br>URL that describes the type of the serialized message.<br><br>Protobuf library provides support to pack/unpack Any values in the form<br>of utility functions or additional generated methods of the Any type.<br><br>Example 1: Pack and unpack a message in C++.<br><br>    Foo foo = ...;<br>    Any any;<br>    any.PackFrom(foo);<br>    ...<br>    if (any.UnpackTo(&foo)) {<br>      ...<br>    }<br><br>Example 2: Pack and unpack a message in Java.<br><br>    Foo foo = ...;<br>    Any any = Any.pack(foo);<br>    ...<br>    if (any.is(Foo.class)) {<br>      foo = any.unpack(Foo.class);<br>    }<br><br> Example 3: Pack and unpack a message in Python.<br><br>    foo = Foo(...)<br>    any = Any()<br>    any.Pack(foo)<br>    ...<br>    if any.Is(Foo.DESCRIPTOR):<br>      any.Unpack(foo)<br>      ...<br><br> Example 4: Pack and unpack a message in Go<br><br>     foo := &pb.Foo{...}<br>     any, err := anypb.New(foo)<br>     if err != nil {<br>       ...<br>     }<br>     ...<br>     foo := &pb.Foo{}<br>     if err := any.UnmarshalTo(foo); err != nil {<br>       ...<br>     }<br><br>The pack methods provided by protobuf library will by default use<br>'type.googleapis.com/full.type.name' as the type URL and the unpack<br>methods only use the fully qualified type name after the last '/'<br>in the type URL, for example "foo.bar.com/x/y.z" will yield type<br>name "y.z".<br><br><br>JSON<br>====<br>The JSON representation of an `Any` value uses the regular<br>representation of the deserialized, embedded message, with an<br>additional field `@type` which contains the type URL. Example:<br><br>    package google.profile;<br>    message Person {<br>      string first_name = 1;<br>      string last_name = 2;<br>    }<br><br>    {<br>      "@type": "type.googleapis.com/google.profile.Person",<br>      "firstName": <string>,<br>      "lastName": <string><br>    }<br><br>If the embedded message type is well-known and has a custom JSON<br>representation, that representation will be embedded adding a field<br>`value` which holds the custom JSON in addition to the `@type`<br>field. Example (for message [google.protobuf.Duration][]):<br><br>    {<br>      "@type": "type.googleapis.com/google.protobuf.Duration",<br>      "value": "1.212s"<br>    }|
|»» **additionalProperties**|any|false|none|none|
|»» @type|string|false|none|A URL/resource name that uniquely identifies the type of the serialized<br>protocol buffer message. This string must contain at least<br>one "/" character. The last segment of the URL's path must represent<br>the fully qualified name of the type (as in<br>`path/google.protobuf.Duration`). The name should be in a canonical form<br>(e.g., leading "." is not accepted).<br><br>In practice, teams usually precompile into the binary all types that they<br>expect it to use in the context of Any. However, for URLs which use the<br>scheme `http`, `https`, or no scheme, one can optionally set up a type<br>server that maps type URLs to message definitions as follows:<br><br>* If no scheme is provided, `https` is assumed.<br>* An HTTP GET on the URL must yield a [google.protobuf.Type][]<br>  value in binary format, or produce an error.<br>* Applications are allowed to cache lookup results based on the<br>  URL, or have them precompiled into a binary to avoid any<br>  lookup. Therefore, binary compatibility needs to be preserved<br>  on changes to types. (Use versioned type names to manage<br>  breaking changes.)<br><br>Note: this functionality is not currently available in the official<br>protobuf release, and it is not used for type URLs beginning with<br>type.googleapis.com.<br><br>Schemes other than `http`, `https` (or the empty scheme) might be<br>used with implementation specific semantics.|
|» status|string|false|none|ProposalStatus enumerates the valid statuses of a proposal.<br><br> - PROPOSAL_STATUS_UNSPECIFIED: PROPOSAL_STATUS_UNSPECIFIED defines the default propopsal status.<br> - PROPOSAL_STATUS_DEPOSIT_PERIOD: PROPOSAL_STATUS_DEPOSIT_PERIOD defines a proposal status during the deposit<br>period.<br> - PROPOSAL_STATUS_VOTING_PERIOD: PROPOSAL_STATUS_VOTING_PERIOD defines a proposal status during the voting<br>period.<br> - PROPOSAL_STATUS_PASSED: PROPOSAL_STATUS_PASSED defines a proposal status of a proposal that has<br>passed.<br> - PROPOSAL_STATUS_REJECTED: PROPOSAL_STATUS_REJECTED defines a proposal status of a proposal that has<br>been rejected.<br> - PROPOSAL_STATUS_FAILED: PROPOSAL_STATUS_FAILED defines a proposal status of a proposal that has<br>failed.|
|» finalTallyResult|object|false|none|TallyResult defines a standard tally for a governance proposal.|
|»» yes|string|false|none|none|
|»» abstain|string|false|none|none|
|»» no|string|false|none|none|
|»» noWithVeto|string|false|none|none|
|» submitTime|string(date-time)|false|none|none|
|» depositEndTime|string(date-time)|false|none|none|
|» totalDeposit|[object]|false|none|none|
|»» denom|string|false|none|none|
|»» amount|string|false|none|none|
|» votingStartTime|string(date-time)|false|none|none|
|» votingEndTime|string(date-time)|false|none|none|
|pagination|object|false|none|pagination defines the pagination in the response.|
|» nextKey|string(byte)|false|none|none|
|» total|string(uint64)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|PROPOSAL_STATUS_UNSPECIFIED|
|status|PROPOSAL_STATUS_DEPOSIT_PERIOD|
|status|PROPOSAL_STATUS_VOTING_PERIOD|
|status|PROPOSAL_STATUS_PASSED|
|status|PROPOSAL_STATUS_REJECTED|
|status|PROPOSAL_STATUS_FAILED|

<h2 id="tocS_cosmos.gov.v1beta1.QueryTallyResultResponse">cosmos.gov.v1beta1.QueryTallyResultResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.gov.v1beta1.querytallyresultresponse"></a>
<a id="schema_cosmos.gov.v1beta1.QueryTallyResultResponse"></a>
<a id="tocScosmos.gov.v1beta1.querytallyresultresponse"></a>
<a id="tocscosmos.gov.v1beta1.querytallyresultresponse"></a>

```json
{
  "tally": {
    "yes": "string",
    "abstain": "string",
    "no": "string",
    "noWithVeto": "string"
  }
}

```

QueryTallyResultResponse is the response type for the Query/Tally RPC method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tally|object|false|none|TallyResult defines a standard tally for a governance proposal.|
|» yes|string|false|none|none|
|» abstain|string|false|none|none|
|» no|string|false|none|none|
|» noWithVeto|string|false|none|none|

<h2 id="tocS_cosmos.gov.v1beta1.QueryVoteResponse">cosmos.gov.v1beta1.QueryVoteResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.gov.v1beta1.queryvoteresponse"></a>
<a id="schema_cosmos.gov.v1beta1.QueryVoteResponse"></a>
<a id="tocScosmos.gov.v1beta1.queryvoteresponse"></a>
<a id="tocscosmos.gov.v1beta1.queryvoteresponse"></a>

```json
{
  "vote": {
    "proposalId": "string",
    "voter": "string",
    "option": "VOTE_OPTION_UNSPECIFIED",
    "options": [
      {
        "option": "VOTE_OPTION_UNSPECIFIED",
        "weight": "string"
      }
    ]
  }
}

```

QueryVoteResponse is the response type for the Query/Vote RPC method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|vote|object|false|none|Vote defines a vote on a governance proposal.<br>A Vote consists of a proposal ID, the voter, and the vote option.|
|» proposalId|string(uint64)|false|none|none|
|» voter|string|false|none|none|
|» option|string|false|none|Deprecated: Prefer to use `options` instead. This field is set in queries<br>if and only if `len(options) == 1` and that option has weight 1. In all<br>other cases, this field will default to VOTE_OPTION_UNSPECIFIED.|
|» options|[object]|false|none|none|
|»» option|string|false|none|VoteOption enumerates the valid vote options for a given governance proposal.<br><br> - VOTE_OPTION_UNSPECIFIED: VOTE_OPTION_UNSPECIFIED defines a no-op vote option.<br> - VOTE_OPTION_YES: VOTE_OPTION_YES defines a yes vote option.<br> - VOTE_OPTION_ABSTAIN: VOTE_OPTION_ABSTAIN defines an abstain vote option.<br> - VOTE_OPTION_NO: VOTE_OPTION_NO defines a no vote option.<br> - VOTE_OPTION_NO_WITH_VETO: VOTE_OPTION_NO_WITH_VETO defines a no with veto vote option.|
|»» weight|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|option|VOTE_OPTION_UNSPECIFIED|
|option|VOTE_OPTION_YES|
|option|VOTE_OPTION_ABSTAIN|
|option|VOTE_OPTION_NO|
|option|VOTE_OPTION_NO_WITH_VETO|
|option|VOTE_OPTION_UNSPECIFIED|
|option|VOTE_OPTION_YES|
|option|VOTE_OPTION_ABSTAIN|
|option|VOTE_OPTION_NO|
|option|VOTE_OPTION_NO_WITH_VETO|

<h2 id="tocS_cosmos.gov.v1beta1.QueryVotesResponse">cosmos.gov.v1beta1.QueryVotesResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.gov.v1beta1.queryvotesresponse"></a>
<a id="schema_cosmos.gov.v1beta1.QueryVotesResponse"></a>
<a id="tocScosmos.gov.v1beta1.queryvotesresponse"></a>
<a id="tocscosmos.gov.v1beta1.queryvotesresponse"></a>

```json
{
  "votes": [
    {
      "proposalId": "string",
      "voter": "string",
      "option": "VOTE_OPTION_UNSPECIFIED",
      "options": [
        {
          "option": "VOTE_OPTION_UNSPECIFIED",
          "weight": "string"
        }
      ]
    }
  ],
  "pagination": {
    "nextKey": "string",
    "total": "string"
  }
}

```

QueryVotesResponse is the response type for the Query/Votes RPC method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|votes|[object]|false|none|votes defined the queried votes.|
|» proposalId|string(uint64)|false|none|none|
|» voter|string|false|none|none|
|» option|string|false|none|Deprecated: Prefer to use `options` instead. This field is set in queries<br>if and only if `len(options) == 1` and that option has weight 1. In all<br>other cases, this field will default to VOTE_OPTION_UNSPECIFIED.|
|» options|[object]|false|none|none|
|»» option|string|false|none|VoteOption enumerates the valid vote options for a given governance proposal.<br><br> - VOTE_OPTION_UNSPECIFIED: VOTE_OPTION_UNSPECIFIED defines a no-op vote option.<br> - VOTE_OPTION_YES: VOTE_OPTION_YES defines a yes vote option.<br> - VOTE_OPTION_ABSTAIN: VOTE_OPTION_ABSTAIN defines an abstain vote option.<br> - VOTE_OPTION_NO: VOTE_OPTION_NO defines a no vote option.<br> - VOTE_OPTION_NO_WITH_VETO: VOTE_OPTION_NO_WITH_VETO defines a no with veto vote option.|
|»» weight|string|false|none|none|
|pagination|object|false|none|pagination defines the pagination in the response.|
|» nextKey|string(byte)|false|none|none|
|» total|string(uint64)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|option|VOTE_OPTION_UNSPECIFIED|
|option|VOTE_OPTION_YES|
|option|VOTE_OPTION_ABSTAIN|
|option|VOTE_OPTION_NO|
|option|VOTE_OPTION_NO_WITH_VETO|
|option|VOTE_OPTION_UNSPECIFIED|
|option|VOTE_OPTION_YES|
|option|VOTE_OPTION_ABSTAIN|
|option|VOTE_OPTION_NO|
|option|VOTE_OPTION_NO_WITH_VETO|

<h2 id="tocS_cosmos.gov.v1beta1.TallyParams">cosmos.gov.v1beta1.TallyParams</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.gov.v1beta1.tallyparams"></a>
<a id="schema_cosmos.gov.v1beta1.TallyParams"></a>
<a id="tocScosmos.gov.v1beta1.tallyparams"></a>
<a id="tocscosmos.gov.v1beta1.tallyparams"></a>

```json
{
  "quorum": "string",
  "threshold": "string",
  "vetoThreshold": "string"
}

```

TallyParams defines the params for tallying votes on governance proposals.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|quorum|string(byte)|false|none|Minimum percentage of total stake needed to vote for a result to be<br> considered valid.|
|threshold|string(byte)|false|none|Minimum proportion of Yes votes for proposal to pass. Default value: 0.5.|
|vetoThreshold|string(byte)|false|none|Minimum value of Veto votes to Total votes ratio for proposal to be<br> vetoed. Default value: 1/3.|

<h2 id="tocS_cosmos.gov.v1beta1.TallyResult">cosmos.gov.v1beta1.TallyResult</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.gov.v1beta1.tallyresult"></a>
<a id="schema_cosmos.gov.v1beta1.TallyResult"></a>
<a id="tocScosmos.gov.v1beta1.tallyresult"></a>
<a id="tocscosmos.gov.v1beta1.tallyresult"></a>

```json
{
  "yes": "string",
  "abstain": "string",
  "no": "string",
  "noWithVeto": "string"
}

```

TallyResult defines a standard tally for a governance proposal.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|yes|string|false|none|none|
|abstain|string|false|none|none|
|no|string|false|none|none|
|noWithVeto|string|false|none|none|

<h2 id="tocS_cosmos.gov.v1beta1.Vote">cosmos.gov.v1beta1.Vote</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.gov.v1beta1.vote"></a>
<a id="schema_cosmos.gov.v1beta1.Vote"></a>
<a id="tocScosmos.gov.v1beta1.vote"></a>
<a id="tocscosmos.gov.v1beta1.vote"></a>

```json
{
  "proposalId": "string",
  "voter": "string",
  "option": "VOTE_OPTION_UNSPECIFIED",
  "options": [
    {
      "option": "VOTE_OPTION_UNSPECIFIED",
      "weight": "string"
    }
  ]
}

```

Vote defines a vote on a governance proposal.
A Vote consists of a proposal ID, the voter, and the vote option.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|proposalId|string(uint64)|false|none|none|
|voter|string|false|none|none|
|option|string|false|none|Deprecated: Prefer to use `options` instead. This field is set in queries<br>if and only if `len(options) == 1` and that option has weight 1. In all<br>other cases, this field will default to VOTE_OPTION_UNSPECIFIED.|
|options|[object]|false|none|none|
|» option|string|false|none|VoteOption enumerates the valid vote options for a given governance proposal.<br><br> - VOTE_OPTION_UNSPECIFIED: VOTE_OPTION_UNSPECIFIED defines a no-op vote option.<br> - VOTE_OPTION_YES: VOTE_OPTION_YES defines a yes vote option.<br> - VOTE_OPTION_ABSTAIN: VOTE_OPTION_ABSTAIN defines an abstain vote option.<br> - VOTE_OPTION_NO: VOTE_OPTION_NO defines a no vote option.<br> - VOTE_OPTION_NO_WITH_VETO: VOTE_OPTION_NO_WITH_VETO defines a no with veto vote option.|
|» weight|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|option|VOTE_OPTION_UNSPECIFIED|
|option|VOTE_OPTION_YES|
|option|VOTE_OPTION_ABSTAIN|
|option|VOTE_OPTION_NO|
|option|VOTE_OPTION_NO_WITH_VETO|
|option|VOTE_OPTION_UNSPECIFIED|
|option|VOTE_OPTION_YES|
|option|VOTE_OPTION_ABSTAIN|
|option|VOTE_OPTION_NO|
|option|VOTE_OPTION_NO_WITH_VETO|

<h2 id="tocS_cosmos.gov.v1beta1.VoteOption">cosmos.gov.v1beta1.VoteOption</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.gov.v1beta1.voteoption"></a>
<a id="schema_cosmos.gov.v1beta1.VoteOption"></a>
<a id="tocScosmos.gov.v1beta1.voteoption"></a>
<a id="tocscosmos.gov.v1beta1.voteoption"></a>

```json
"VOTE_OPTION_UNSPECIFIED"

```

VoteOption enumerates the valid vote options for a given governance proposal.

 - VOTE_OPTION_UNSPECIFIED: VOTE_OPTION_UNSPECIFIED defines a no-op vote option.
 - VOTE_OPTION_YES: VOTE_OPTION_YES defines a yes vote option.
 - VOTE_OPTION_ABSTAIN: VOTE_OPTION_ABSTAIN defines an abstain vote option.
 - VOTE_OPTION_NO: VOTE_OPTION_NO defines a no vote option.
 - VOTE_OPTION_NO_WITH_VETO: VOTE_OPTION_NO_WITH_VETO defines a no with veto vote option.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|VoteOption enumerates the valid vote options for a given governance proposal.<br><br> - VOTE_OPTION_UNSPECIFIED: VOTE_OPTION_UNSPECIFIED defines a no-op vote option.<br> - VOTE_OPTION_YES: VOTE_OPTION_YES defines a yes vote option.<br> - VOTE_OPTION_ABSTAIN: VOTE_OPTION_ABSTAIN defines an abstain vote option.<br> - VOTE_OPTION_NO: VOTE_OPTION_NO defines a no vote option.<br> - VOTE_OPTION_NO_WITH_VETO: VOTE_OPTION_NO_WITH_VETO defines a no with veto vote option.|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|VOTE_OPTION_UNSPECIFIED|
|*anonymous*|VOTE_OPTION_YES|
|*anonymous*|VOTE_OPTION_ABSTAIN|
|*anonymous*|VOTE_OPTION_NO|
|*anonymous*|VOTE_OPTION_NO_WITH_VETO|

<h2 id="tocS_cosmos.gov.v1beta1.VotingParams">cosmos.gov.v1beta1.VotingParams</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.gov.v1beta1.votingparams"></a>
<a id="schema_cosmos.gov.v1beta1.VotingParams"></a>
<a id="tocScosmos.gov.v1beta1.votingparams"></a>
<a id="tocscosmos.gov.v1beta1.votingparams"></a>

```json
{
  "votingPeriod": "string"
}

```

VotingParams defines the params for voting on governance proposals.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|votingPeriod|string|false|none|Length of the voting period.|

<h2 id="tocS_cosmos.gov.v1beta1.WeightedVoteOption">cosmos.gov.v1beta1.WeightedVoteOption</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.gov.v1beta1.weightedvoteoption"></a>
<a id="schema_cosmos.gov.v1beta1.WeightedVoteOption"></a>
<a id="tocScosmos.gov.v1beta1.weightedvoteoption"></a>
<a id="tocscosmos.gov.v1beta1.weightedvoteoption"></a>

```json
{
  "option": "VOTE_OPTION_UNSPECIFIED",
  "weight": "string"
}

```

WeightedVoteOption defines a unit of vote for vote split.

Since: cosmos-sdk 0.43

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|option|string|false|none|VoteOption enumerates the valid vote options for a given governance proposal.<br><br> - VOTE_OPTION_UNSPECIFIED: VOTE_OPTION_UNSPECIFIED defines a no-op vote option.<br> - VOTE_OPTION_YES: VOTE_OPTION_YES defines a yes vote option.<br> - VOTE_OPTION_ABSTAIN: VOTE_OPTION_ABSTAIN defines an abstain vote option.<br> - VOTE_OPTION_NO: VOTE_OPTION_NO defines a no vote option.<br> - VOTE_OPTION_NO_WITH_VETO: VOTE_OPTION_NO_WITH_VETO defines a no with veto vote option.|
|weight|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|option|VOTE_OPTION_UNSPECIFIED|
|option|VOTE_OPTION_YES|
|option|VOTE_OPTION_ABSTAIN|
|option|VOTE_OPTION_NO|
|option|VOTE_OPTION_NO_WITH_VETO|

<h2 id="tocS_cosmos.slashing.v1beta1.MsgUnjailResponse">cosmos.slashing.v1beta1.MsgUnjailResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.slashing.v1beta1.msgunjailresponse"></a>
<a id="schema_cosmos.slashing.v1beta1.MsgUnjailResponse"></a>
<a id="tocScosmos.slashing.v1beta1.msgunjailresponse"></a>
<a id="tocscosmos.slashing.v1beta1.msgunjailresponse"></a>

```json
{}

```

MsgUnjailResponse defines the Msg/Unjail response type

### Properties

*None*

<h2 id="tocS_cosmos.slashing.v1beta1.Params">cosmos.slashing.v1beta1.Params</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.slashing.v1beta1.params"></a>
<a id="schema_cosmos.slashing.v1beta1.Params"></a>
<a id="tocScosmos.slashing.v1beta1.params"></a>
<a id="tocscosmos.slashing.v1beta1.params"></a>

```json
{
  "signedBlocksWindow": "string",
  "minSignedPerWindow": "string",
  "downtimeJailDuration": "string",
  "slashFractionDoubleSign": "string",
  "slashFractionDowntime": "string"
}

```

Params represents the parameters used for by the slashing module.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|signedBlocksWindow|string(int64)|false|none|none|
|minSignedPerWindow|string(byte)|false|none|none|
|downtimeJailDuration|string|false|none|none|
|slashFractionDoubleSign|string(byte)|false|none|none|
|slashFractionDowntime|string(byte)|false|none|none|

<h2 id="tocS_cosmos.slashing.v1beta1.QueryParamsResponse">cosmos.slashing.v1beta1.QueryParamsResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.slashing.v1beta1.queryparamsresponse"></a>
<a id="schema_cosmos.slashing.v1beta1.QueryParamsResponse"></a>
<a id="tocScosmos.slashing.v1beta1.queryparamsresponse"></a>
<a id="tocscosmos.slashing.v1beta1.queryparamsresponse"></a>

```json
{
  "params": {
    "signedBlocksWindow": "string",
    "minSignedPerWindow": "string",
    "downtimeJailDuration": "string",
    "slashFractionDoubleSign": "string",
    "slashFractionDowntime": "string"
  }
}

```

QueryParamsResponse is the response type for the Query/Params RPC method

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|params|object|false|none|Params represents the parameters used for by the slashing module.|
|» signedBlocksWindow|string(int64)|false|none|none|
|» minSignedPerWindow|string(byte)|false|none|none|
|» downtimeJailDuration|string|false|none|none|
|» slashFractionDoubleSign|string(byte)|false|none|none|
|» slashFractionDowntime|string(byte)|false|none|none|

<h2 id="tocS_cosmos.slashing.v1beta1.QuerySigningInfoResponse">cosmos.slashing.v1beta1.QuerySigningInfoResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.slashing.v1beta1.querysigninginforesponse"></a>
<a id="schema_cosmos.slashing.v1beta1.QuerySigningInfoResponse"></a>
<a id="tocScosmos.slashing.v1beta1.querysigninginforesponse"></a>
<a id="tocscosmos.slashing.v1beta1.querysigninginforesponse"></a>

```json
{
  "valSigningInfo": {
    "address": "string",
    "startHeight": "string",
    "indexOffset": "string",
    "jailedUntil": "2019-08-24T14:15:22Z",
    "tombstoned": true,
    "missedBlocksCounter": "string"
  }
}

```

QuerySigningInfoResponse is the response type for the Query/SigningInfo RPC
method

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|valSigningInfo|object|false|none|ValidatorSigningInfo defines a validator's signing info for monitoring their<br>liveness activity.|
|» address|string|false|none|none|
|» startHeight|string(int64)|false|none|none|
|» indexOffset|string(int64)|false|none|Index which is incremented each time the validator was a bonded<br>in a block and may have signed a precommit or not. This in conjunction with the<br>`SignedBlocksWindow` param determines the index in the `MissedBlocksBitArray`.|
|» jailedUntil|string(date-time)|false|none|Timestamp until which the validator is jailed due to liveness downtime.|
|» tombstoned|boolean|false|none|Whether or not a validator has been tombstoned (killed out of validator set). It is set<br>once the validator commits an equivocation or for any other configured misbehiavor.|
|» missedBlocksCounter|string(int64)|false|none|A counter kept to avoid unnecessary array reads.<br>Note that `Sum(MissedBlocksBitArray)` always equals `MissedBlocksCounter`.|

<h2 id="tocS_cosmos.slashing.v1beta1.QuerySigningInfosResponse">cosmos.slashing.v1beta1.QuerySigningInfosResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.slashing.v1beta1.querysigninginfosresponse"></a>
<a id="schema_cosmos.slashing.v1beta1.QuerySigningInfosResponse"></a>
<a id="tocScosmos.slashing.v1beta1.querysigninginfosresponse"></a>
<a id="tocscosmos.slashing.v1beta1.querysigninginfosresponse"></a>

```json
{
  "info": [
    {
      "address": "string",
      "startHeight": "string",
      "indexOffset": "string",
      "jailedUntil": "2019-08-24T14:15:22Z",
      "tombstoned": true,
      "missedBlocksCounter": "string"
    }
  ],
  "pagination": {
    "nextKey": "string",
    "total": "string"
  }
}

```

QuerySigningInfosResponse is the response type for the Query/SigningInfos RPC
method

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|info|[object]|false|none|none|
|» address|string|false|none|none|
|» startHeight|string(int64)|false|none|none|
|» indexOffset|string(int64)|false|none|Index which is incremented each time the validator was a bonded<br>in a block and may have signed a precommit or not. This in conjunction with the<br>`SignedBlocksWindow` param determines the index in the `MissedBlocksBitArray`.|
|» jailedUntil|string(date-time)|false|none|Timestamp until which the validator is jailed due to liveness downtime.|
|» tombstoned|boolean|false|none|Whether or not a validator has been tombstoned (killed out of validator set). It is set<br>once the validator commits an equivocation or for any other configured misbehiavor.|
|» missedBlocksCounter|string(int64)|false|none|A counter kept to avoid unnecessary array reads.<br>Note that `Sum(MissedBlocksBitArray)` always equals `MissedBlocksCounter`.|
|pagination|object|false|none|PageResponse is to be embedded in gRPC response messages where the<br>corresponding request message has used PageRequest.<br><br> message SomeResponse {<br>         repeated Bar results = 1;<br>         PageResponse page = 2;<br> }|
|» nextKey|string(byte)|false|none|none|
|» total|string(uint64)|false|none|none|

<h2 id="tocS_cosmos.slashing.v1beta1.ValidatorSigningInfo">cosmos.slashing.v1beta1.ValidatorSigningInfo</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.slashing.v1beta1.validatorsigninginfo"></a>
<a id="schema_cosmos.slashing.v1beta1.ValidatorSigningInfo"></a>
<a id="tocScosmos.slashing.v1beta1.validatorsigninginfo"></a>
<a id="tocscosmos.slashing.v1beta1.validatorsigninginfo"></a>

```json
{
  "address": "string",
  "startHeight": "string",
  "indexOffset": "string",
  "jailedUntil": "2019-08-24T14:15:22Z",
  "tombstoned": true,
  "missedBlocksCounter": "string"
}

```

ValidatorSigningInfo defines a validator's signing info for monitoring their
liveness activity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|false|none|none|
|startHeight|string(int64)|false|none|none|
|indexOffset|string(int64)|false|none|Index which is incremented each time the validator was a bonded<br>in a block and may have signed a precommit or not. This in conjunction with the<br>`SignedBlocksWindow` param determines the index in the `MissedBlocksBitArray`.|
|jailedUntil|string(date-time)|false|none|Timestamp until which the validator is jailed due to liveness downtime.|
|tombstoned|boolean|false|none|Whether or not a validator has been tombstoned (killed out of validator set). It is set<br>once the validator commits an equivocation or for any other configured misbehiavor.|
|missedBlocksCounter|string(int64)|false|none|A counter kept to avoid unnecessary array reads.<br>Note that `Sum(MissedBlocksBitArray)` always equals `MissedBlocksCounter`.|

<h2 id="tocS_cosmos.staking.v1beta1.BondStatus">cosmos.staking.v1beta1.BondStatus</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.staking.v1beta1.bondstatus"></a>
<a id="schema_cosmos.staking.v1beta1.BondStatus"></a>
<a id="tocScosmos.staking.v1beta1.bondstatus"></a>
<a id="tocscosmos.staking.v1beta1.bondstatus"></a>

```json
"BOND_STATUS_UNSPECIFIED"

```

BondStatus is the status of a validator.

 - BOND_STATUS_UNSPECIFIED: UNSPECIFIED defines an invalid validator status.
 - BOND_STATUS_UNBONDED: UNBONDED defines a validator that is not bonded.
 - BOND_STATUS_UNBONDING: UNBONDING defines a validator that is unbonding.
 - BOND_STATUS_BONDED: BONDED defines a validator that is bonded.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|BondStatus is the status of a validator.<br><br> - BOND_STATUS_UNSPECIFIED: UNSPECIFIED defines an invalid validator status.<br> - BOND_STATUS_UNBONDED: UNBONDED defines a validator that is not bonded.<br> - BOND_STATUS_UNBONDING: UNBONDING defines a validator that is unbonding.<br> - BOND_STATUS_BONDED: BONDED defines a validator that is bonded.|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|BOND_STATUS_UNSPECIFIED|
|*anonymous*|BOND_STATUS_UNBONDED|
|*anonymous*|BOND_STATUS_UNBONDING|
|*anonymous*|BOND_STATUS_BONDED|

<h2 id="tocS_cosmos.staking.v1beta1.Commission">cosmos.staking.v1beta1.Commission</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.staking.v1beta1.commission"></a>
<a id="schema_cosmos.staking.v1beta1.Commission"></a>
<a id="tocScosmos.staking.v1beta1.commission"></a>
<a id="tocscosmos.staking.v1beta1.commission"></a>

```json
{
  "commissionRates": {
    "rate": "string",
    "maxRate": "string",
    "maxChangeRate": "string"
  },
  "updateTime": "2019-08-24T14:15:22Z"
}

```

Commission defines commission parameters for a given validator.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commissionRates|object|false|none|commission_rates defines the initial commission rates to be used for creating a validator.|
|» rate|string|false|none|rate is the commission rate charged to delegators, as a fraction.|
|» maxRate|string|false|none|max_rate defines the maximum commission rate which validator can ever charge, as a fraction.|
|» maxChangeRate|string|false|none|max_change_rate defines the maximum daily increase of the validator commission, as a fraction.|
|updateTime|string(date-time)|false|none|update_time is the last time the commission rate was changed.|

<h2 id="tocS_cosmos.staking.v1beta1.CommissionRates">cosmos.staking.v1beta1.CommissionRates</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.staking.v1beta1.commissionrates"></a>
<a id="schema_cosmos.staking.v1beta1.CommissionRates"></a>
<a id="tocScosmos.staking.v1beta1.commissionrates"></a>
<a id="tocscosmos.staking.v1beta1.commissionrates"></a>

```json
{
  "rate": "string",
  "maxRate": "string",
  "maxChangeRate": "string"
}

```

CommissionRates defines the initial commission rates to be used for creating
a validator.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rate|string|false|none|rate is the commission rate charged to delegators, as a fraction.|
|maxRate|string|false|none|max_rate defines the maximum commission rate which validator can ever charge, as a fraction.|
|maxChangeRate|string|false|none|max_change_rate defines the maximum daily increase of the validator commission, as a fraction.|

<h2 id="tocS_cosmos.staking.v1beta1.Delegation">cosmos.staking.v1beta1.Delegation</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.staking.v1beta1.delegation"></a>
<a id="schema_cosmos.staking.v1beta1.Delegation"></a>
<a id="tocScosmos.staking.v1beta1.delegation"></a>
<a id="tocscosmos.staking.v1beta1.delegation"></a>

```json
{
  "delegatorAddress": "string",
  "validatorAddress": "string",
  "shares": "string"
}

```

Delegation represents the bond with tokens held by an account. It is
owned by one delegator, and is associated with the voting power of one
validator.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|delegatorAddress|string|false|none|delegator_address is the bech32-encoded address of the delegator.|
|validatorAddress|string|false|none|validator_address is the bech32-encoded address of the validator.|
|shares|string|false|none|shares define the delegation shares received.|

<h2 id="tocS_cosmos.staking.v1beta1.DelegationResponse">cosmos.staking.v1beta1.DelegationResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.staking.v1beta1.delegationresponse"></a>
<a id="schema_cosmos.staking.v1beta1.DelegationResponse"></a>
<a id="tocScosmos.staking.v1beta1.delegationresponse"></a>
<a id="tocscosmos.staking.v1beta1.delegationresponse"></a>

```json
{
  "delegation": {
    "delegatorAddress": "string",
    "validatorAddress": "string",
    "shares": "string"
  },
  "balance": {
    "denom": "string",
    "amount": "string"
  }
}

```

DelegationResponse is equivalent to Delegation except that it contains a
balance in addition to shares which is more suitable for client responses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|delegation|object|false|none|Delegation represents the bond with tokens held by an account. It is<br>owned by one delegator, and is associated with the voting power of one<br>validator.|
|» delegatorAddress|string|false|none|delegator_address is the bech32-encoded address of the delegator.|
|» validatorAddress|string|false|none|validator_address is the bech32-encoded address of the validator.|
|» shares|string|false|none|shares define the delegation shares received.|
|balance|object|false|none|Coin defines a token with a denomination and an amount.<br><br>NOTE: The amount field is an Int which implements the custom method<br>signatures required by gogoproto.|
|» denom|string|false|none|none|
|» amount|string|false|none|none|

<h2 id="tocS_cosmos.staking.v1beta1.Description">cosmos.staking.v1beta1.Description</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.staking.v1beta1.description"></a>
<a id="schema_cosmos.staking.v1beta1.Description"></a>
<a id="tocScosmos.staking.v1beta1.description"></a>
<a id="tocscosmos.staking.v1beta1.description"></a>

```json
{
  "moniker": "string",
  "identity": "string",
  "website": "string",
  "securityContact": "string",
  "details": "string"
}

```

Description defines a validator description.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|moniker|string|false|none|moniker defines a human-readable name for the validator.|
|identity|string|false|none|identity defines an optional identity signature (ex. UPort or Keybase).|
|website|string|false|none|website defines an optional website link.|
|securityContact|string|false|none|security_contact defines an optional email for security contact.|
|details|string|false|none|details define other optional details.|

<h2 id="tocS_cosmos.staking.v1beta1.HistoricalInfo">cosmos.staking.v1beta1.HistoricalInfo</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.staking.v1beta1.historicalinfo"></a>
<a id="schema_cosmos.staking.v1beta1.HistoricalInfo"></a>
<a id="tocScosmos.staking.v1beta1.historicalinfo"></a>
<a id="tocscosmos.staking.v1beta1.historicalinfo"></a>

```json
{
  "header": {
    "version": {
      "block": "string",
      "app": "string"
    },
    "chainId": "string",
    "height": "string",
    "time": "2019-08-24T14:15:22Z",
    "lastBlockId": {
      "hash": "string",
      "partSetHeader": {
        "total": 0,
        "hash": "string"
      }
    },
    "lastCommitHash": "string",
    "dataHash": "string",
    "validatorsHash": "string",
    "nextValidatorsHash": "string",
    "consensusHash": "string",
    "appHash": "string",
    "lastResultsHash": "string",
    "evidenceHash": "string",
    "proposerAddress": "string"
  },
  "valset": [
    {
      "operatorAddress": "string",
      "consensusPubkey": {
        "@type": "string",
        "property1": null,
        "property2": null
      },
      "jailed": true,
      "status": "BOND_STATUS_UNSPECIFIED",
      "tokens": "string",
      "delegatorShares": "string",
      "description": {
        "moniker": "string",
        "identity": "string",
        "website": "string",
        "securityContact": "string",
        "details": "string"
      },
      "unbondingHeight": "string",
      "unbondingTime": "2019-08-24T14:15:22Z",
      "commission": {
        "commissionRates": {
          "rate": "string",
          "maxRate": "string",
          "maxChangeRate": "string"
        },
        "updateTime": "2019-08-24T14:15:22Z"
      },
      "minSelfDelegation": "string"
    }
  ]
}

```

HistoricalInfo contains header and validator information for a given block.
It is stored as part of staking module's state, which persists the `n` most
recent HistoricalInfo
(`n` is set by the staking module's `historical_entries` parameter).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|header|object|false|none|Header defines the structure of a Tendermint block header.|
|» version|object|false|none|Consensus captures the consensus rules for processing a block in the blockchain,<br>including all blockchain data structures and the rules of the application's<br>state transition machine.|
|»» block|string(uint64)|false|none|none|
|»» app|string(uint64)|false|none|none|
|» chainId|string|false|none|none|
|» height|string(int64)|false|none|none|
|» time|string(date-time)|false|none|none|
|» lastBlockId|object|false|none|none|
|»» hash|string(byte)|false|none|none|
|»» partSetHeader|object|false|none|none|
|»»» total|integer(int64)|false|none|none|
|»»» hash|string(byte)|false|none|none|
|» lastCommitHash|string(byte)|false|none|none|
|» dataHash|string(byte)|false|none|none|
|» validatorsHash|string(byte)|false|none|none|
|» nextValidatorsHash|string(byte)|false|none|none|
|» consensusHash|string(byte)|false|none|none|
|» appHash|string(byte)|false|none|none|
|» lastResultsHash|string(byte)|false|none|none|
|» evidenceHash|string(byte)|false|none|none|
|» proposerAddress|string(byte)|false|none|none|
|valset|[object]|false|none|none|
|» operatorAddress|string|false|none|operator_address defines the address of the validator's operator; bech encoded in JSON.|
|» consensusPubkey|object|false|none|`Any` contains an arbitrary serialized protocol buffer message along with a<br>URL that describes the type of the serialized message.<br><br>Protobuf library provides support to pack/unpack Any values in the form<br>of utility functions or additional generated methods of the Any type.<br><br>Example 1: Pack and unpack a message in C++.<br><br>    Foo foo = ...;<br>    Any any;<br>    any.PackFrom(foo);<br>    ...<br>    if (any.UnpackTo(&foo)) {<br>      ...<br>    }<br><br>Example 2: Pack and unpack a message in Java.<br><br>    Foo foo = ...;<br>    Any any = Any.pack(foo);<br>    ...<br>    if (any.is(Foo.class)) {<br>      foo = any.unpack(Foo.class);<br>    }<br><br> Example 3: Pack and unpack a message in Python.<br><br>    foo = Foo(...)<br>    any = Any()<br>    any.Pack(foo)<br>    ...<br>    if any.Is(Foo.DESCRIPTOR):<br>      any.Unpack(foo)<br>      ...<br><br> Example 4: Pack and unpack a message in Go<br><br>     foo := &pb.Foo{...}<br>     any, err := anypb.New(foo)<br>     if err != nil {<br>       ...<br>     }<br>     ...<br>     foo := &pb.Foo{}<br>     if err := any.UnmarshalTo(foo); err != nil {<br>       ...<br>     }<br><br>The pack methods provided by protobuf library will by default use<br>'type.googleapis.com/full.type.name' as the type URL and the unpack<br>methods only use the fully qualified type name after the last '/'<br>in the type URL, for example "foo.bar.com/x/y.z" will yield type<br>name "y.z".<br><br><br>JSON<br>====<br>The JSON representation of an `Any` value uses the regular<br>representation of the deserialized, embedded message, with an<br>additional field `@type` which contains the type URL. Example:<br><br>    package google.profile;<br>    message Person {<br>      string first_name = 1;<br>      string last_name = 2;<br>    }<br><br>    {<br>      "@type": "type.googleapis.com/google.profile.Person",<br>      "firstName": <string>,<br>      "lastName": <string><br>    }<br><br>If the embedded message type is well-known and has a custom JSON<br>representation, that representation will be embedded adding a field<br>`value` which holds the custom JSON in addition to the `@type`<br>field. Example (for message [google.protobuf.Duration][]):<br><br>    {<br>      "@type": "type.googleapis.com/google.protobuf.Duration",<br>      "value": "1.212s"<br>    }|
|»» **additionalProperties**|any|false|none|none|
|»» @type|string|false|none|A URL/resource name that uniquely identifies the type of the serialized<br>protocol buffer message. This string must contain at least<br>one "/" character. The last segment of the URL's path must represent<br>the fully qualified name of the type (as in<br>`path/google.protobuf.Duration`). The name should be in a canonical form<br>(e.g., leading "." is not accepted).<br><br>In practice, teams usually precompile into the binary all types that they<br>expect it to use in the context of Any. However, for URLs which use the<br>scheme `http`, `https`, or no scheme, one can optionally set up a type<br>server that maps type URLs to message definitions as follows:<br><br>* If no scheme is provided, `https` is assumed.<br>* An HTTP GET on the URL must yield a [google.protobuf.Type][]<br>  value in binary format, or produce an error.<br>* Applications are allowed to cache lookup results based on the<br>  URL, or have them precompiled into a binary to avoid any<br>  lookup. Therefore, binary compatibility needs to be preserved<br>  on changes to types. (Use versioned type names to manage<br>  breaking changes.)<br><br>Note: this functionality is not currently available in the official<br>protobuf release, and it is not used for type URLs beginning with<br>type.googleapis.com.<br><br>Schemes other than `http`, `https` (or the empty scheme) might be<br>used with implementation specific semantics.|
|» jailed|boolean|false|none|jailed defined whether the validator has been jailed from bonded status or not.|
|» status|string|false|none|status is the validator status (bonded/unbonding/unbonded).|
|» tokens|string|false|none|tokens define the delegated tokens (incl. self-delegation).|
|» delegatorShares|string|false|none|delegator_shares defines total shares issued to a validator's delegators.|
|» description|object|false|none|description defines the description terms for the validator.|
|»» moniker|string|false|none|moniker defines a human-readable name for the validator.|
|»» identity|string|false|none|identity defines an optional identity signature (ex. UPort or Keybase).|
|»» website|string|false|none|website defines an optional website link.|
|»» securityContact|string|false|none|security_contact defines an optional email for security contact.|
|»» details|string|false|none|details define other optional details.|
|» unbondingHeight|string(int64)|false|none|unbonding_height defines, if unbonding, the height at which this validator has begun unbonding.|
|» unbondingTime|string(date-time)|false|none|unbonding_time defines, if unbonding, the min time for the validator to complete unbonding.|
|» commission|object|false|none|commission defines the commission parameters.|
|»» commissionRates|object|false|none|commission_rates defines the initial commission rates to be used for creating a validator.|
|»»» rate|string|false|none|rate is the commission rate charged to delegators, as a fraction.|
|»»» maxRate|string|false|none|max_rate defines the maximum commission rate which validator can ever charge, as a fraction.|
|»»» maxChangeRate|string|false|none|max_change_rate defines the maximum daily increase of the validator commission, as a fraction.|
|»» updateTime|string(date-time)|false|none|update_time is the last time the commission rate was changed.|
|» minSelfDelegation|string|false|none|min_self_delegation is the validator's self declared minimum self delegation.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|BOND_STATUS_UNSPECIFIED|
|status|BOND_STATUS_UNBONDED|
|status|BOND_STATUS_UNBONDING|
|status|BOND_STATUS_BONDED|

<h2 id="tocS_cosmos.staking.v1beta1.MsgBeginRedelegateResponse">cosmos.staking.v1beta1.MsgBeginRedelegateResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.staking.v1beta1.msgbeginredelegateresponse"></a>
<a id="schema_cosmos.staking.v1beta1.MsgBeginRedelegateResponse"></a>
<a id="tocScosmos.staking.v1beta1.msgbeginredelegateresponse"></a>
<a id="tocscosmos.staking.v1beta1.msgbeginredelegateresponse"></a>

```json
{
  "completionTime": "2019-08-24T14:15:22Z"
}

```

MsgBeginRedelegateResponse defines the Msg/BeginRedelegate response type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completionTime|string(date-time)|false|none|none|

<h2 id="tocS_cosmos.staking.v1beta1.MsgCreateValidatorResponse">cosmos.staking.v1beta1.MsgCreateValidatorResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.staking.v1beta1.msgcreatevalidatorresponse"></a>
<a id="schema_cosmos.staking.v1beta1.MsgCreateValidatorResponse"></a>
<a id="tocScosmos.staking.v1beta1.msgcreatevalidatorresponse"></a>
<a id="tocscosmos.staking.v1beta1.msgcreatevalidatorresponse"></a>

```json
{}

```

MsgCreateValidatorResponse defines the Msg/CreateValidator response type.

### Properties

*None*

<h2 id="tocS_cosmos.staking.v1beta1.MsgDelegateResponse">cosmos.staking.v1beta1.MsgDelegateResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.staking.v1beta1.msgdelegateresponse"></a>
<a id="schema_cosmos.staking.v1beta1.MsgDelegateResponse"></a>
<a id="tocScosmos.staking.v1beta1.msgdelegateresponse"></a>
<a id="tocscosmos.staking.v1beta1.msgdelegateresponse"></a>

```json
{}

```

MsgDelegateResponse defines the Msg/Delegate response type.

### Properties

*None*

<h2 id="tocS_cosmos.staking.v1beta1.MsgEditValidatorResponse">cosmos.staking.v1beta1.MsgEditValidatorResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.staking.v1beta1.msgeditvalidatorresponse"></a>
<a id="schema_cosmos.staking.v1beta1.MsgEditValidatorResponse"></a>
<a id="tocScosmos.staking.v1beta1.msgeditvalidatorresponse"></a>
<a id="tocscosmos.staking.v1beta1.msgeditvalidatorresponse"></a>

```json
{}

```

MsgEditValidatorResponse defines the Msg/EditValidator response type.

### Properties

*None*

<h2 id="tocS_cosmos.staking.v1beta1.MsgUndelegateResponse">cosmos.staking.v1beta1.MsgUndelegateResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.staking.v1beta1.msgundelegateresponse"></a>
<a id="schema_cosmos.staking.v1beta1.MsgUndelegateResponse"></a>
<a id="tocScosmos.staking.v1beta1.msgundelegateresponse"></a>
<a id="tocscosmos.staking.v1beta1.msgundelegateresponse"></a>

```json
{
  "completionTime": "2019-08-24T14:15:22Z"
}

```

MsgUndelegateResponse defines the Msg/Undelegate response type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completionTime|string(date-time)|false|none|none|

<h2 id="tocS_cosmos.staking.v1beta1.Params">cosmos.staking.v1beta1.Params</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.staking.v1beta1.params"></a>
<a id="schema_cosmos.staking.v1beta1.Params"></a>
<a id="tocScosmos.staking.v1beta1.params"></a>
<a id="tocscosmos.staking.v1beta1.params"></a>

```json
{
  "unbondingTime": "string",
  "maxValidators": 0,
  "maxEntries": 0,
  "historicalEntries": 0,
  "bondDenom": "string"
}

```

Params defines the parameters for the staking module.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|unbondingTime|string|false|none|unbonding_time is the time duration of unbonding.|
|maxValidators|integer(int64)|false|none|max_validators is the maximum number of validators.|
|maxEntries|integer(int64)|false|none|max_entries is the max entries for either unbonding delegation or redelegation (per pair/trio).|
|historicalEntries|integer(int64)|false|none|historical_entries is the number of historical entries to persist.|
|bondDenom|string|false|none|bond_denom defines the bondable coin denomination.|

<h2 id="tocS_cosmos.staking.v1beta1.Pool">cosmos.staking.v1beta1.Pool</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.staking.v1beta1.pool"></a>
<a id="schema_cosmos.staking.v1beta1.Pool"></a>
<a id="tocScosmos.staking.v1beta1.pool"></a>
<a id="tocscosmos.staking.v1beta1.pool"></a>

```json
{
  "notBondedTokens": "string",
  "bondedTokens": "string"
}

```

Pool is used for tracking bonded and not-bonded token supply of the bond
denomination.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|notBondedTokens|string|false|none|none|
|bondedTokens|string|false|none|none|

<h2 id="tocS_cosmos.staking.v1beta1.QueryDelegationResponse">cosmos.staking.v1beta1.QueryDelegationResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.staking.v1beta1.querydelegationresponse"></a>
<a id="schema_cosmos.staking.v1beta1.QueryDelegationResponse"></a>
<a id="tocScosmos.staking.v1beta1.querydelegationresponse"></a>
<a id="tocscosmos.staking.v1beta1.querydelegationresponse"></a>

```json
{
  "delegationResponse": {
    "delegation": {
      "delegatorAddress": "string",
      "validatorAddress": "string",
      "shares": "string"
    },
    "balance": {
      "denom": "string",
      "amount": "string"
    }
  }
}

```

QueryDelegationResponse is response type for the Query/Delegation RPC method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|delegationResponse|object|false|none|DelegationResponse is equivalent to Delegation except that it contains a<br>balance in addition to shares which is more suitable for client responses.|
|» delegation|object|false|none|Delegation represents the bond with tokens held by an account. It is<br>owned by one delegator, and is associated with the voting power of one<br>validator.|
|»» delegatorAddress|string|false|none|delegator_address is the bech32-encoded address of the delegator.|
|»» validatorAddress|string|false|none|validator_address is the bech32-encoded address of the validator.|
|»» shares|string|false|none|shares define the delegation shares received.|
|» balance|object|false|none|Coin defines a token with a denomination and an amount.<br><br>NOTE: The amount field is an Int which implements the custom method<br>signatures required by gogoproto.|
|»» denom|string|false|none|none|
|»» amount|string|false|none|none|

<h2 id="tocS_cosmos.staking.v1beta1.QueryDelegatorDelegationsResponse">cosmos.staking.v1beta1.QueryDelegatorDelegationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.staking.v1beta1.querydelegatordelegationsresponse"></a>
<a id="schema_cosmos.staking.v1beta1.QueryDelegatorDelegationsResponse"></a>
<a id="tocScosmos.staking.v1beta1.querydelegatordelegationsresponse"></a>
<a id="tocscosmos.staking.v1beta1.querydelegatordelegationsresponse"></a>

```json
{
  "delegationResponses": [
    {
      "delegation": {
        "delegatorAddress": "string",
        "validatorAddress": "string",
        "shares": "string"
      },
      "balance": {
        "denom": "string",
        "amount": "string"
      }
    }
  ],
  "pagination": {
    "nextKey": "string",
    "total": "string"
  }
}

```

QueryDelegatorDelegationsResponse is response type for the
Query/DelegatorDelegations RPC method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|delegationResponses|[object]|false|none|delegation_responses defines all the delegations' info of a delegator.|
|» delegation|object|false|none|Delegation represents the bond with tokens held by an account. It is<br>owned by one delegator, and is associated with the voting power of one<br>validator.|
|»» delegatorAddress|string|false|none|delegator_address is the bech32-encoded address of the delegator.|
|»» validatorAddress|string|false|none|validator_address is the bech32-encoded address of the validator.|
|»» shares|string|false|none|shares define the delegation shares received.|
|» balance|object|false|none|Coin defines a token with a denomination and an amount.<br><br>NOTE: The amount field is an Int which implements the custom method<br>signatures required by gogoproto.|
|»» denom|string|false|none|none|
|»» amount|string|false|none|none|
|pagination|object|false|none|pagination defines the pagination in the response.|
|» nextKey|string(byte)|false|none|none|
|» total|string(uint64)|false|none|none|

<h2 id="tocS_cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsResponse">cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.staking.v1beta1.querydelegatorunbondingdelegationsresponse"></a>
<a id="schema_cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsResponse"></a>
<a id="tocScosmos.staking.v1beta1.querydelegatorunbondingdelegationsresponse"></a>
<a id="tocscosmos.staking.v1beta1.querydelegatorunbondingdelegationsresponse"></a>

```json
{
  "unbondingResponses": [
    {
      "delegatorAddress": "string",
      "validatorAddress": "string",
      "entries": [
        {
          "creationHeight": "string",
          "completionTime": "2019-08-24T14:15:22Z",
          "initialBalance": "string",
          "balance": "string"
        }
      ]
    }
  ],
  "pagination": {
    "nextKey": "string",
    "total": "string"
  }
}

```

QueryUnbondingDelegatorDelegationsResponse is response type for the
Query/UnbondingDelegatorDelegations RPC method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|unbondingResponses|[object]|false|none|none|
|» delegatorAddress|string|false|none|delegator_address is the bech32-encoded address of the delegator.|
|» validatorAddress|string|false|none|validator_address is the bech32-encoded address of the validator.|
|» entries|[object]|false|none|entries are the unbonding delegation entries.|
|»» creationHeight|string(int64)|false|none|creation_height is the height which the unbonding took place.|
|»» completionTime|string(date-time)|false|none|completion_time is the unix time for unbonding completion.|
|»» initialBalance|string|false|none|initial_balance defines the tokens initially scheduled to receive at completion.|
|»» balance|string|false|none|balance defines the tokens to receive at completion.|
|pagination|object|false|none|pagination defines the pagination in the response.|
|» nextKey|string(byte)|false|none|none|
|» total|string(uint64)|false|none|none|

<h2 id="tocS_cosmos.staking.v1beta1.QueryDelegatorValidatorResponse">cosmos.staking.v1beta1.QueryDelegatorValidatorResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.staking.v1beta1.querydelegatorvalidatorresponse"></a>
<a id="schema_cosmos.staking.v1beta1.QueryDelegatorValidatorResponse"></a>
<a id="tocScosmos.staking.v1beta1.querydelegatorvalidatorresponse"></a>
<a id="tocscosmos.staking.v1beta1.querydelegatorvalidatorresponse"></a>

```json
{
  "validator": {
    "operatorAddress": "string",
    "consensusPubkey": {
      "@type": "string",
      "property1": null,
      "property2": null
    },
    "jailed": true,
    "status": "BOND_STATUS_UNSPECIFIED",
    "tokens": "string",
    "delegatorShares": "string",
    "description": {
      "moniker": "string",
      "identity": "string",
      "website": "string",
      "securityContact": "string",
      "details": "string"
    },
    "unbondingHeight": "string",
    "unbondingTime": "2019-08-24T14:15:22Z",
    "commission": {
      "commissionRates": {
        "rate": "string",
        "maxRate": "string",
        "maxChangeRate": "string"
      },
      "updateTime": "2019-08-24T14:15:22Z"
    },
    "minSelfDelegation": "string"
  }
}

```

QueryDelegatorValidatorResponse response type for the
Query/DelegatorValidator RPC method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|validator|object|false|none|Validator defines a validator, together with the total amount of the<br>Validator's bond shares and their exchange rate to coins. Slashing results in<br>a decrease in the exchange rate, allowing correct calculation of future<br>undelegations without iterating over delegators. When coins are delegated to<br>this validator, the validator is credited with a delegation whose number of<br>bond shares is based on the amount of coins delegated divided by the current<br>exchange rate. Voting power can be calculated as total bonded shares<br>multiplied by exchange rate.|
|» operatorAddress|string|false|none|operator_address defines the address of the validator's operator; bech encoded in JSON.|
|» consensusPubkey|object|false|none|`Any` contains an arbitrary serialized protocol buffer message along with a<br>URL that describes the type of the serialized message.<br><br>Protobuf library provides support to pack/unpack Any values in the form<br>of utility functions or additional generated methods of the Any type.<br><br>Example 1: Pack and unpack a message in C++.<br><br>    Foo foo = ...;<br>    Any any;<br>    any.PackFrom(foo);<br>    ...<br>    if (any.UnpackTo(&foo)) {<br>      ...<br>    }<br><br>Example 2: Pack and unpack a message in Java.<br><br>    Foo foo = ...;<br>    Any any = Any.pack(foo);<br>    ...<br>    if (any.is(Foo.class)) {<br>      foo = any.unpack(Foo.class);<br>    }<br><br> Example 3: Pack and unpack a message in Python.<br><br>    foo = Foo(...)<br>    any = Any()<br>    any.Pack(foo)<br>    ...<br>    if any.Is(Foo.DESCRIPTOR):<br>      any.Unpack(foo)<br>      ...<br><br> Example 4: Pack and unpack a message in Go<br><br>     foo := &pb.Foo{...}<br>     any, err := anypb.New(foo)<br>     if err != nil {<br>       ...<br>     }<br>     ...<br>     foo := &pb.Foo{}<br>     if err := any.UnmarshalTo(foo); err != nil {<br>       ...<br>     }<br><br>The pack methods provided by protobuf library will by default use<br>'type.googleapis.com/full.type.name' as the type URL and the unpack<br>methods only use the fully qualified type name after the last '/'<br>in the type URL, for example "foo.bar.com/x/y.z" will yield type<br>name "y.z".<br><br><br>JSON<br>====<br>The JSON representation of an `Any` value uses the regular<br>representation of the deserialized, embedded message, with an<br>additional field `@type` which contains the type URL. Example:<br><br>    package google.profile;<br>    message Person {<br>      string first_name = 1;<br>      string last_name = 2;<br>    }<br><br>    {<br>      "@type": "type.googleapis.com/google.profile.Person",<br>      "firstName": <string>,<br>      "lastName": <string><br>    }<br><br>If the embedded message type is well-known and has a custom JSON<br>representation, that representation will be embedded adding a field<br>`value` which holds the custom JSON in addition to the `@type`<br>field. Example (for message [google.protobuf.Duration][]):<br><br>    {<br>      "@type": "type.googleapis.com/google.protobuf.Duration",<br>      "value": "1.212s"<br>    }|
|»» **additionalProperties**|any|false|none|none|
|»» @type|string|false|none|A URL/resource name that uniquely identifies the type of the serialized<br>protocol buffer message. This string must contain at least<br>one "/" character. The last segment of the URL's path must represent<br>the fully qualified name of the type (as in<br>`path/google.protobuf.Duration`). The name should be in a canonical form<br>(e.g., leading "." is not accepted).<br><br>In practice, teams usually precompile into the binary all types that they<br>expect it to use in the context of Any. However, for URLs which use the<br>scheme `http`, `https`, or no scheme, one can optionally set up a type<br>server that maps type URLs to message definitions as follows:<br><br>* If no scheme is provided, `https` is assumed.<br>* An HTTP GET on the URL must yield a [google.protobuf.Type][]<br>  value in binary format, or produce an error.<br>* Applications are allowed to cache lookup results based on the<br>  URL, or have them precompiled into a binary to avoid any<br>  lookup. Therefore, binary compatibility needs to be preserved<br>  on changes to types. (Use versioned type names to manage<br>  breaking changes.)<br><br>Note: this functionality is not currently available in the official<br>protobuf release, and it is not used for type URLs beginning with<br>type.googleapis.com.<br><br>Schemes other than `http`, `https` (or the empty scheme) might be<br>used with implementation specific semantics.|
|» jailed|boolean|false|none|jailed defined whether the validator has been jailed from bonded status or not.|
|» status|string|false|none|status is the validator status (bonded/unbonding/unbonded).|
|» tokens|string|false|none|tokens define the delegated tokens (incl. self-delegation).|
|» delegatorShares|string|false|none|delegator_shares defines total shares issued to a validator's delegators.|
|» description|object|false|none|description defines the description terms for the validator.|
|»» moniker|string|false|none|moniker defines a human-readable name for the validator.|
|»» identity|string|false|none|identity defines an optional identity signature (ex. UPort or Keybase).|
|»» website|string|false|none|website defines an optional website link.|
|»» securityContact|string|false|none|security_contact defines an optional email for security contact.|
|»» details|string|false|none|details define other optional details.|
|» unbondingHeight|string(int64)|false|none|unbonding_height defines, if unbonding, the height at which this validator has begun unbonding.|
|» unbondingTime|string(date-time)|false|none|unbonding_time defines, if unbonding, the min time for the validator to complete unbonding.|
|» commission|object|false|none|commission defines the commission parameters.|
|»» commissionRates|object|false|none|commission_rates defines the initial commission rates to be used for creating a validator.|
|»»» rate|string|false|none|rate is the commission rate charged to delegators, as a fraction.|
|»»» maxRate|string|false|none|max_rate defines the maximum commission rate which validator can ever charge, as a fraction.|
|»»» maxChangeRate|string|false|none|max_change_rate defines the maximum daily increase of the validator commission, as a fraction.|
|»» updateTime|string(date-time)|false|none|update_time is the last time the commission rate was changed.|
|» minSelfDelegation|string|false|none|min_self_delegation is the validator's self declared minimum self delegation.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|BOND_STATUS_UNSPECIFIED|
|status|BOND_STATUS_UNBONDED|
|status|BOND_STATUS_UNBONDING|
|status|BOND_STATUS_BONDED|

<h2 id="tocS_cosmos.staking.v1beta1.QueryDelegatorValidatorsResponse">cosmos.staking.v1beta1.QueryDelegatorValidatorsResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.staking.v1beta1.querydelegatorvalidatorsresponse"></a>
<a id="schema_cosmos.staking.v1beta1.QueryDelegatorValidatorsResponse"></a>
<a id="tocScosmos.staking.v1beta1.querydelegatorvalidatorsresponse"></a>
<a id="tocscosmos.staking.v1beta1.querydelegatorvalidatorsresponse"></a>

```json
{
  "validators": [
    {
      "operatorAddress": "string",
      "consensusPubkey": {
        "@type": "string",
        "property1": null,
        "property2": null
      },
      "jailed": true,
      "status": "BOND_STATUS_UNSPECIFIED",
      "tokens": "string",
      "delegatorShares": "string",
      "description": {
        "moniker": "string",
        "identity": "string",
        "website": "string",
        "securityContact": "string",
        "details": "string"
      },
      "unbondingHeight": "string",
      "unbondingTime": "2019-08-24T14:15:22Z",
      "commission": {
        "commissionRates": {
          "rate": "string",
          "maxRate": "string",
          "maxChangeRate": "string"
        },
        "updateTime": "2019-08-24T14:15:22Z"
      },
      "minSelfDelegation": "string"
    }
  ],
  "pagination": {
    "nextKey": "string",
    "total": "string"
  }
}

```

QueryDelegatorValidatorsResponse is response type for the
Query/DelegatorValidators RPC method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|validators|[object]|false|none|validators defines the the validators' info of a delegator.|
|» operatorAddress|string|false|none|operator_address defines the address of the validator's operator; bech encoded in JSON.|
|» consensusPubkey|object|false|none|`Any` contains an arbitrary serialized protocol buffer message along with a<br>URL that describes the type of the serialized message.<br><br>Protobuf library provides support to pack/unpack Any values in the form<br>of utility functions or additional generated methods of the Any type.<br><br>Example 1: Pack and unpack a message in C++.<br><br>    Foo foo = ...;<br>    Any any;<br>    any.PackFrom(foo);<br>    ...<br>    if (any.UnpackTo(&foo)) {<br>      ...<br>    }<br><br>Example 2: Pack and unpack a message in Java.<br><br>    Foo foo = ...;<br>    Any any = Any.pack(foo);<br>    ...<br>    if (any.is(Foo.class)) {<br>      foo = any.unpack(Foo.class);<br>    }<br><br> Example 3: Pack and unpack a message in Python.<br><br>    foo = Foo(...)<br>    any = Any()<br>    any.Pack(foo)<br>    ...<br>    if any.Is(Foo.DESCRIPTOR):<br>      any.Unpack(foo)<br>      ...<br><br> Example 4: Pack and unpack a message in Go<br><br>     foo := &pb.Foo{...}<br>     any, err := anypb.New(foo)<br>     if err != nil {<br>       ...<br>     }<br>     ...<br>     foo := &pb.Foo{}<br>     if err := any.UnmarshalTo(foo); err != nil {<br>       ...<br>     }<br><br>The pack methods provided by protobuf library will by default use<br>'type.googleapis.com/full.type.name' as the type URL and the unpack<br>methods only use the fully qualified type name after the last '/'<br>in the type URL, for example "foo.bar.com/x/y.z" will yield type<br>name "y.z".<br><br><br>JSON<br>====<br>The JSON representation of an `Any` value uses the regular<br>representation of the deserialized, embedded message, with an<br>additional field `@type` which contains the type URL. Example:<br><br>    package google.profile;<br>    message Person {<br>      string first_name = 1;<br>      string last_name = 2;<br>    }<br><br>    {<br>      "@type": "type.googleapis.com/google.profile.Person",<br>      "firstName": <string>,<br>      "lastName": <string><br>    }<br><br>If the embedded message type is well-known and has a custom JSON<br>representation, that representation will be embedded adding a field<br>`value` which holds the custom JSON in addition to the `@type`<br>field. Example (for message [google.protobuf.Duration][]):<br><br>    {<br>      "@type": "type.googleapis.com/google.protobuf.Duration",<br>      "value": "1.212s"<br>    }|
|»» **additionalProperties**|any|false|none|none|
|»» @type|string|false|none|A URL/resource name that uniquely identifies the type of the serialized<br>protocol buffer message. This string must contain at least<br>one "/" character. The last segment of the URL's path must represent<br>the fully qualified name of the type (as in<br>`path/google.protobuf.Duration`). The name should be in a canonical form<br>(e.g., leading "." is not accepted).<br><br>In practice, teams usually precompile into the binary all types that they<br>expect it to use in the context of Any. However, for URLs which use the<br>scheme `http`, `https`, or no scheme, one can optionally set up a type<br>server that maps type URLs to message definitions as follows:<br><br>* If no scheme is provided, `https` is assumed.<br>* An HTTP GET on the URL must yield a [google.protobuf.Type][]<br>  value in binary format, or produce an error.<br>* Applications are allowed to cache lookup results based on the<br>  URL, or have them precompiled into a binary to avoid any<br>  lookup. Therefore, binary compatibility needs to be preserved<br>  on changes to types. (Use versioned type names to manage<br>  breaking changes.)<br><br>Note: this functionality is not currently available in the official<br>protobuf release, and it is not used for type URLs beginning with<br>type.googleapis.com.<br><br>Schemes other than `http`, `https` (or the empty scheme) might be<br>used with implementation specific semantics.|
|» jailed|boolean|false|none|jailed defined whether the validator has been jailed from bonded status or not.|
|» status|string|false|none|status is the validator status (bonded/unbonding/unbonded).|
|» tokens|string|false|none|tokens define the delegated tokens (incl. self-delegation).|
|» delegatorShares|string|false|none|delegator_shares defines total shares issued to a validator's delegators.|
|» description|object|false|none|description defines the description terms for the validator.|
|»» moniker|string|false|none|moniker defines a human-readable name for the validator.|
|»» identity|string|false|none|identity defines an optional identity signature (ex. UPort or Keybase).|
|»» website|string|false|none|website defines an optional website link.|
|»» securityContact|string|false|none|security_contact defines an optional email for security contact.|
|»» details|string|false|none|details define other optional details.|
|» unbondingHeight|string(int64)|false|none|unbonding_height defines, if unbonding, the height at which this validator has begun unbonding.|
|» unbondingTime|string(date-time)|false|none|unbonding_time defines, if unbonding, the min time for the validator to complete unbonding.|
|» commission|object|false|none|commission defines the commission parameters.|
|»» commissionRates|object|false|none|commission_rates defines the initial commission rates to be used for creating a validator.|
|»»» rate|string|false|none|rate is the commission rate charged to delegators, as a fraction.|
|»»» maxRate|string|false|none|max_rate defines the maximum commission rate which validator can ever charge, as a fraction.|
|»»» maxChangeRate|string|false|none|max_change_rate defines the maximum daily increase of the validator commission, as a fraction.|
|»» updateTime|string(date-time)|false|none|update_time is the last time the commission rate was changed.|
|» minSelfDelegation|string|false|none|min_self_delegation is the validator's self declared minimum self delegation.|
|pagination|object|false|none|pagination defines the pagination in the response.|
|» nextKey|string(byte)|false|none|none|
|» total|string(uint64)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|BOND_STATUS_UNSPECIFIED|
|status|BOND_STATUS_UNBONDED|
|status|BOND_STATUS_UNBONDING|
|status|BOND_STATUS_BONDED|

<h2 id="tocS_cosmos.staking.v1beta1.QueryHistoricalInfoResponse">cosmos.staking.v1beta1.QueryHistoricalInfoResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.staking.v1beta1.queryhistoricalinforesponse"></a>
<a id="schema_cosmos.staking.v1beta1.QueryHistoricalInfoResponse"></a>
<a id="tocScosmos.staking.v1beta1.queryhistoricalinforesponse"></a>
<a id="tocscosmos.staking.v1beta1.queryhistoricalinforesponse"></a>

```json
{
  "hist": {
    "header": {
      "version": {
        "block": "string",
        "app": "string"
      },
      "chainId": "string",
      "height": "string",
      "time": "2019-08-24T14:15:22Z",
      "lastBlockId": {
        "hash": "string",
        "partSetHeader": {
          "total": 0,
          "hash": "string"
        }
      },
      "lastCommitHash": "string",
      "dataHash": "string",
      "validatorsHash": "string",
      "nextValidatorsHash": "string",
      "consensusHash": "string",
      "appHash": "string",
      "lastResultsHash": "string",
      "evidenceHash": "string",
      "proposerAddress": "string"
    },
    "valset": [
      {
        "operatorAddress": "string",
        "consensusPubkey": {
          "@type": "string",
          "property1": null,
          "property2": null
        },
        "jailed": true,
        "status": "BOND_STATUS_UNSPECIFIED",
        "tokens": "string",
        "delegatorShares": "string",
        "description": {
          "moniker": "string",
          "identity": "string",
          "website": "string",
          "securityContact": "string",
          "details": "string"
        },
        "unbondingHeight": "string",
        "unbondingTime": "2019-08-24T14:15:22Z",
        "commission": {
          "commissionRates": {
            "rate": "string",
            "maxRate": "string",
            "maxChangeRate": "string"
          },
          "updateTime": "2019-08-24T14:15:22Z"
        },
        "minSelfDelegation": "string"
      }
    ]
  }
}

```

QueryHistoricalInfoResponse is response type for the Query/HistoricalInfo RPC
method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hist|object|false|none|hist defines the historical info at the given height.|
|» header|object|false|none|Header defines the structure of a Tendermint block header.|
|»» version|object|false|none|Consensus captures the consensus rules for processing a block in the blockchain,<br>including all blockchain data structures and the rules of the application's<br>state transition machine.|
|»»» block|string(uint64)|false|none|none|
|»»» app|string(uint64)|false|none|none|
|»» chainId|string|false|none|none|
|»» height|string(int64)|false|none|none|
|»» time|string(date-time)|false|none|none|
|»» lastBlockId|object|false|none|none|
|»»» hash|string(byte)|false|none|none|
|»»» partSetHeader|object|false|none|none|
|»»»» total|integer(int64)|false|none|none|
|»»»» hash|string(byte)|false|none|none|
|»» lastCommitHash|string(byte)|false|none|none|
|»» dataHash|string(byte)|false|none|none|
|»» validatorsHash|string(byte)|false|none|none|
|»» nextValidatorsHash|string(byte)|false|none|none|
|»» consensusHash|string(byte)|false|none|none|
|»» appHash|string(byte)|false|none|none|
|»» lastResultsHash|string(byte)|false|none|none|
|»» evidenceHash|string(byte)|false|none|none|
|»» proposerAddress|string(byte)|false|none|none|
|» valset|[object]|false|none|none|
|»» operatorAddress|string|false|none|operator_address defines the address of the validator's operator; bech encoded in JSON.|
|»» consensusPubkey|object|false|none|`Any` contains an arbitrary serialized protocol buffer message along with a<br>URL that describes the type of the serialized message.<br><br>Protobuf library provides support to pack/unpack Any values in the form<br>of utility functions or additional generated methods of the Any type.<br><br>Example 1: Pack and unpack a message in C++.<br><br>    Foo foo = ...;<br>    Any any;<br>    any.PackFrom(foo);<br>    ...<br>    if (any.UnpackTo(&foo)) {<br>      ...<br>    }<br><br>Example 2: Pack and unpack a message in Java.<br><br>    Foo foo = ...;<br>    Any any = Any.pack(foo);<br>    ...<br>    if (any.is(Foo.class)) {<br>      foo = any.unpack(Foo.class);<br>    }<br><br> Example 3: Pack and unpack a message in Python.<br><br>    foo = Foo(...)<br>    any = Any()<br>    any.Pack(foo)<br>    ...<br>    if any.Is(Foo.DESCRIPTOR):<br>      any.Unpack(foo)<br>      ...<br><br> Example 4: Pack and unpack a message in Go<br><br>     foo := &pb.Foo{...}<br>     any, err := anypb.New(foo)<br>     if err != nil {<br>       ...<br>     }<br>     ...<br>     foo := &pb.Foo{}<br>     if err := any.UnmarshalTo(foo); err != nil {<br>       ...<br>     }<br><br>The pack methods provided by protobuf library will by default use<br>'type.googleapis.com/full.type.name' as the type URL and the unpack<br>methods only use the fully qualified type name after the last '/'<br>in the type URL, for example "foo.bar.com/x/y.z" will yield type<br>name "y.z".<br><br><br>JSON<br>====<br>The JSON representation of an `Any` value uses the regular<br>representation of the deserialized, embedded message, with an<br>additional field `@type` which contains the type URL. Example:<br><br>    package google.profile;<br>    message Person {<br>      string first_name = 1;<br>      string last_name = 2;<br>    }<br><br>    {<br>      "@type": "type.googleapis.com/google.profile.Person",<br>      "firstName": <string>,<br>      "lastName": <string><br>    }<br><br>If the embedded message type is well-known and has a custom JSON<br>representation, that representation will be embedded adding a field<br>`value` which holds the custom JSON in addition to the `@type`<br>field. Example (for message [google.protobuf.Duration][]):<br><br>    {<br>      "@type": "type.googleapis.com/google.protobuf.Duration",<br>      "value": "1.212s"<br>    }|
|»»» **additionalProperties**|any|false|none|none|
|»»» @type|string|false|none|A URL/resource name that uniquely identifies the type of the serialized<br>protocol buffer message. This string must contain at least<br>one "/" character. The last segment of the URL's path must represent<br>the fully qualified name of the type (as in<br>`path/google.protobuf.Duration`). The name should be in a canonical form<br>(e.g., leading "." is not accepted).<br><br>In practice, teams usually precompile into the binary all types that they<br>expect it to use in the context of Any. However, for URLs which use the<br>scheme `http`, `https`, or no scheme, one can optionally set up a type<br>server that maps type URLs to message definitions as follows:<br><br>* If no scheme is provided, `https` is assumed.<br>* An HTTP GET on the URL must yield a [google.protobuf.Type][]<br>  value in binary format, or produce an error.<br>* Applications are allowed to cache lookup results based on the<br>  URL, or have them precompiled into a binary to avoid any<br>  lookup. Therefore, binary compatibility needs to be preserved<br>  on changes to types. (Use versioned type names to manage<br>  breaking changes.)<br><br>Note: this functionality is not currently available in the official<br>protobuf release, and it is not used for type URLs beginning with<br>type.googleapis.com.<br><br>Schemes other than `http`, `https` (or the empty scheme) might be<br>used with implementation specific semantics.|
|»» jailed|boolean|false|none|jailed defined whether the validator has been jailed from bonded status or not.|
|»» status|string|false|none|status is the validator status (bonded/unbonding/unbonded).|
|»» tokens|string|false|none|tokens define the delegated tokens (incl. self-delegation).|
|»» delegatorShares|string|false|none|delegator_shares defines total shares issued to a validator's delegators.|
|»» description|object|false|none|description defines the description terms for the validator.|
|»»» moniker|string|false|none|moniker defines a human-readable name for the validator.|
|»»» identity|string|false|none|identity defines an optional identity signature (ex. UPort or Keybase).|
|»»» website|string|false|none|website defines an optional website link.|
|»»» securityContact|string|false|none|security_contact defines an optional email for security contact.|
|»»» details|string|false|none|details define other optional details.|
|»» unbondingHeight|string(int64)|false|none|unbonding_height defines, if unbonding, the height at which this validator has begun unbonding.|
|»» unbondingTime|string(date-time)|false|none|unbonding_time defines, if unbonding, the min time for the validator to complete unbonding.|
|»» commission|object|false|none|commission defines the commission parameters.|
|»»» commissionRates|object|false|none|commission_rates defines the initial commission rates to be used for creating a validator.|
|»»»» rate|string|false|none|rate is the commission rate charged to delegators, as a fraction.|
|»»»» maxRate|string|false|none|max_rate defines the maximum commission rate which validator can ever charge, as a fraction.|
|»»»» maxChangeRate|string|false|none|max_change_rate defines the maximum daily increase of the validator commission, as a fraction.|
|»»» updateTime|string(date-time)|false|none|update_time is the last time the commission rate was changed.|
|»» minSelfDelegation|string|false|none|min_self_delegation is the validator's self declared minimum self delegation.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|BOND_STATUS_UNSPECIFIED|
|status|BOND_STATUS_UNBONDED|
|status|BOND_STATUS_UNBONDING|
|status|BOND_STATUS_BONDED|

<h2 id="tocS_cosmos.staking.v1beta1.QueryParamsResponse">cosmos.staking.v1beta1.QueryParamsResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.staking.v1beta1.queryparamsresponse"></a>
<a id="schema_cosmos.staking.v1beta1.QueryParamsResponse"></a>
<a id="tocScosmos.staking.v1beta1.queryparamsresponse"></a>
<a id="tocscosmos.staking.v1beta1.queryparamsresponse"></a>

```json
{
  "params": {
    "unbondingTime": "string",
    "maxValidators": 0,
    "maxEntries": 0,
    "historicalEntries": 0,
    "bondDenom": "string"
  }
}

```

QueryParamsResponse is response type for the Query/Params RPC method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|params|object|false|none|params holds all the parameters of this module.|
|» unbondingTime|string|false|none|unbonding_time is the time duration of unbonding.|
|» maxValidators|integer(int64)|false|none|max_validators is the maximum number of validators.|
|» maxEntries|integer(int64)|false|none|max_entries is the max entries for either unbonding delegation or redelegation (per pair/trio).|
|» historicalEntries|integer(int64)|false|none|historical_entries is the number of historical entries to persist.|
|» bondDenom|string|false|none|bond_denom defines the bondable coin denomination.|

<h2 id="tocS_cosmos.staking.v1beta1.QueryPoolResponse">cosmos.staking.v1beta1.QueryPoolResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.staking.v1beta1.querypoolresponse"></a>
<a id="schema_cosmos.staking.v1beta1.QueryPoolResponse"></a>
<a id="tocScosmos.staking.v1beta1.querypoolresponse"></a>
<a id="tocscosmos.staking.v1beta1.querypoolresponse"></a>

```json
{
  "pool": {
    "notBondedTokens": "string",
    "bondedTokens": "string"
  }
}

```

QueryPoolResponse is response type for the Query/Pool RPC method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pool|object|false|none|pool defines the pool info.|
|» notBondedTokens|string|false|none|none|
|» bondedTokens|string|false|none|none|

<h2 id="tocS_cosmos.staking.v1beta1.QueryRedelegationsResponse">cosmos.staking.v1beta1.QueryRedelegationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.staking.v1beta1.queryredelegationsresponse"></a>
<a id="schema_cosmos.staking.v1beta1.QueryRedelegationsResponse"></a>
<a id="tocScosmos.staking.v1beta1.queryredelegationsresponse"></a>
<a id="tocscosmos.staking.v1beta1.queryredelegationsresponse"></a>

```json
{
  "redelegationResponses": [
    {
      "redelegation": {
        "delegatorAddress": "string",
        "validatorSrcAddress": "string",
        "validatorDstAddress": "string",
        "entries": [
          {
            "creationHeight": "string",
            "completionTime": "2019-08-24T14:15:22Z",
            "initialBalance": "string",
            "sharesDst": "string"
          }
        ]
      },
      "entries": [
        {
          "redelegationEntry": {
            "creationHeight": "string",
            "completionTime": "2019-08-24T14:15:22Z",
            "initialBalance": "string",
            "sharesDst": "string"
          },
          "balance": "string"
        }
      ]
    }
  ],
  "pagination": {
    "nextKey": "string",
    "total": "string"
  }
}

```

QueryRedelegationsResponse is response type for the Query/Redelegations RPC
method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|redelegationResponses|[object]|false|none|none|
|» redelegation|object|false|none|Redelegation contains the list of a particular delegator's redelegating bonds<br>from a particular source validator to a particular destination validator.|
|»» delegatorAddress|string|false|none|delegator_address is the bech32-encoded address of the delegator.|
|»» validatorSrcAddress|string|false|none|validator_src_address is the validator redelegation source operator address.|
|»» validatorDstAddress|string|false|none|validator_dst_address is the validator redelegation destination operator address.|
|»» entries|[object]|false|none|entries are the redelegation entries.|
|»»» creationHeight|string(int64)|false|none|creation_height  defines the height which the redelegation took place.|
|»»» completionTime|string(date-time)|false|none|completion_time defines the unix time for redelegation completion.|
|»»» initialBalance|string|false|none|initial_balance defines the initial balance when redelegation started.|
|»»» sharesDst|string|false|none|shares_dst is the amount of destination-validator shares created by redelegation.|
|» entries|[object]|false|none|none|
|»» redelegationEntry|object|false|none|RedelegationEntry defines a redelegation object with relevant metadata.|
|»»» creationHeight|string(int64)|false|none|creation_height  defines the height which the redelegation took place.|
|»»» completionTime|string(date-time)|false|none|completion_time defines the unix time for redelegation completion.|
|»»» initialBalance|string|false|none|initial_balance defines the initial balance when redelegation started.|
|»»» sharesDst|string|false|none|shares_dst is the amount of destination-validator shares created by redelegation.|
|»» balance|string|false|none|none|
|pagination|object|false|none|pagination defines the pagination in the response.|
|» nextKey|string(byte)|false|none|none|
|» total|string(uint64)|false|none|none|

<h2 id="tocS_cosmos.staking.v1beta1.QueryUnbondingDelegationResponse">cosmos.staking.v1beta1.QueryUnbondingDelegationResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.staking.v1beta1.queryunbondingdelegationresponse"></a>
<a id="schema_cosmos.staking.v1beta1.QueryUnbondingDelegationResponse"></a>
<a id="tocScosmos.staking.v1beta1.queryunbondingdelegationresponse"></a>
<a id="tocscosmos.staking.v1beta1.queryunbondingdelegationresponse"></a>

```json
{
  "unbond": {
    "delegatorAddress": "string",
    "validatorAddress": "string",
    "entries": [
      {
        "creationHeight": "string",
        "completionTime": "2019-08-24T14:15:22Z",
        "initialBalance": "string",
        "balance": "string"
      }
    ]
  }
}

```

QueryDelegationResponse is response type for the Query/UnbondingDelegation
RPC method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|unbond|object|false|none|UnbondingDelegation stores all of a single delegator's unbonding bonds<br>for a single validator in an time-ordered list.|
|» delegatorAddress|string|false|none|delegator_address is the bech32-encoded address of the delegator.|
|» validatorAddress|string|false|none|validator_address is the bech32-encoded address of the validator.|
|» entries|[object]|false|none|entries are the unbonding delegation entries.|
|»» creationHeight|string(int64)|false|none|creation_height is the height which the unbonding took place.|
|»» completionTime|string(date-time)|false|none|completion_time is the unix time for unbonding completion.|
|»» initialBalance|string|false|none|initial_balance defines the tokens initially scheduled to receive at completion.|
|»» balance|string|false|none|balance defines the tokens to receive at completion.|

<h2 id="tocS_cosmos.staking.v1beta1.QueryValidatorDelegationsResponse">cosmos.staking.v1beta1.QueryValidatorDelegationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.staking.v1beta1.queryvalidatordelegationsresponse"></a>
<a id="schema_cosmos.staking.v1beta1.QueryValidatorDelegationsResponse"></a>
<a id="tocScosmos.staking.v1beta1.queryvalidatordelegationsresponse"></a>
<a id="tocscosmos.staking.v1beta1.queryvalidatordelegationsresponse"></a>

```json
{
  "delegationResponses": [
    {
      "delegation": {
        "delegatorAddress": "string",
        "validatorAddress": "string",
        "shares": "string"
      },
      "balance": {
        "denom": "string",
        "amount": "string"
      }
    }
  ],
  "pagination": {
    "nextKey": "string",
    "total": "string"
  }
}

```

QueryValidatorDelegationsResponse is response type for the
Query/ValidatorDelegations RPC method

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|delegationResponses|[object]|false|none|none|
|» delegation|object|false|none|Delegation represents the bond with tokens held by an account. It is<br>owned by one delegator, and is associated with the voting power of one<br>validator.|
|»» delegatorAddress|string|false|none|delegator_address is the bech32-encoded address of the delegator.|
|»» validatorAddress|string|false|none|validator_address is the bech32-encoded address of the validator.|
|»» shares|string|false|none|shares define the delegation shares received.|
|» balance|object|false|none|Coin defines a token with a denomination and an amount.<br><br>NOTE: The amount field is an Int which implements the custom method<br>signatures required by gogoproto.|
|»» denom|string|false|none|none|
|»» amount|string|false|none|none|
|pagination|object|false|none|pagination defines the pagination in the response.|
|» nextKey|string(byte)|false|none|none|
|» total|string(uint64)|false|none|none|

<h2 id="tocS_cosmos.staking.v1beta1.QueryValidatorResponse">cosmos.staking.v1beta1.QueryValidatorResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.staking.v1beta1.queryvalidatorresponse"></a>
<a id="schema_cosmos.staking.v1beta1.QueryValidatorResponse"></a>
<a id="tocScosmos.staking.v1beta1.queryvalidatorresponse"></a>
<a id="tocscosmos.staking.v1beta1.queryvalidatorresponse"></a>

```json
{
  "validator": {
    "operatorAddress": "string",
    "consensusPubkey": {
      "@type": "string",
      "property1": null,
      "property2": null
    },
    "jailed": true,
    "status": "BOND_STATUS_UNSPECIFIED",
    "tokens": "string",
    "delegatorShares": "string",
    "description": {
      "moniker": "string",
      "identity": "string",
      "website": "string",
      "securityContact": "string",
      "details": "string"
    },
    "unbondingHeight": "string",
    "unbondingTime": "2019-08-24T14:15:22Z",
    "commission": {
      "commissionRates": {
        "rate": "string",
        "maxRate": "string",
        "maxChangeRate": "string"
      },
      "updateTime": "2019-08-24T14:15:22Z"
    },
    "minSelfDelegation": "string"
  }
}

```

QueryValidatorResponse is response type for the Query/Validator RPC method

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|validator|object|false|none|Validator defines a validator, together with the total amount of the<br>Validator's bond shares and their exchange rate to coins. Slashing results in<br>a decrease in the exchange rate, allowing correct calculation of future<br>undelegations without iterating over delegators. When coins are delegated to<br>this validator, the validator is credited with a delegation whose number of<br>bond shares is based on the amount of coins delegated divided by the current<br>exchange rate. Voting power can be calculated as total bonded shares<br>multiplied by exchange rate.|
|» operatorAddress|string|false|none|operator_address defines the address of the validator's operator; bech encoded in JSON.|
|» consensusPubkey|object|false|none|`Any` contains an arbitrary serialized protocol buffer message along with a<br>URL that describes the type of the serialized message.<br><br>Protobuf library provides support to pack/unpack Any values in the form<br>of utility functions or additional generated methods of the Any type.<br><br>Example 1: Pack and unpack a message in C++.<br><br>    Foo foo = ...;<br>    Any any;<br>    any.PackFrom(foo);<br>    ...<br>    if (any.UnpackTo(&foo)) {<br>      ...<br>    }<br><br>Example 2: Pack and unpack a message in Java.<br><br>    Foo foo = ...;<br>    Any any = Any.pack(foo);<br>    ...<br>    if (any.is(Foo.class)) {<br>      foo = any.unpack(Foo.class);<br>    }<br><br> Example 3: Pack and unpack a message in Python.<br><br>    foo = Foo(...)<br>    any = Any()<br>    any.Pack(foo)<br>    ...<br>    if any.Is(Foo.DESCRIPTOR):<br>      any.Unpack(foo)<br>      ...<br><br> Example 4: Pack and unpack a message in Go<br><br>     foo := &pb.Foo{...}<br>     any, err := anypb.New(foo)<br>     if err != nil {<br>       ...<br>     }<br>     ...<br>     foo := &pb.Foo{}<br>     if err := any.UnmarshalTo(foo); err != nil {<br>       ...<br>     }<br><br>The pack methods provided by protobuf library will by default use<br>'type.googleapis.com/full.type.name' as the type URL and the unpack<br>methods only use the fully qualified type name after the last '/'<br>in the type URL, for example "foo.bar.com/x/y.z" will yield type<br>name "y.z".<br><br><br>JSON<br>====<br>The JSON representation of an `Any` value uses the regular<br>representation of the deserialized, embedded message, with an<br>additional field `@type` which contains the type URL. Example:<br><br>    package google.profile;<br>    message Person {<br>      string first_name = 1;<br>      string last_name = 2;<br>    }<br><br>    {<br>      "@type": "type.googleapis.com/google.profile.Person",<br>      "firstName": <string>,<br>      "lastName": <string><br>    }<br><br>If the embedded message type is well-known and has a custom JSON<br>representation, that representation will be embedded adding a field<br>`value` which holds the custom JSON in addition to the `@type`<br>field. Example (for message [google.protobuf.Duration][]):<br><br>    {<br>      "@type": "type.googleapis.com/google.protobuf.Duration",<br>      "value": "1.212s"<br>    }|
|»» **additionalProperties**|any|false|none|none|
|»» @type|string|false|none|A URL/resource name that uniquely identifies the type of the serialized<br>protocol buffer message. This string must contain at least<br>one "/" character. The last segment of the URL's path must represent<br>the fully qualified name of the type (as in<br>`path/google.protobuf.Duration`). The name should be in a canonical form<br>(e.g., leading "." is not accepted).<br><br>In practice, teams usually precompile into the binary all types that they<br>expect it to use in the context of Any. However, for URLs which use the<br>scheme `http`, `https`, or no scheme, one can optionally set up a type<br>server that maps type URLs to message definitions as follows:<br><br>* If no scheme is provided, `https` is assumed.<br>* An HTTP GET on the URL must yield a [google.protobuf.Type][]<br>  value in binary format, or produce an error.<br>* Applications are allowed to cache lookup results based on the<br>  URL, or have them precompiled into a binary to avoid any<br>  lookup. Therefore, binary compatibility needs to be preserved<br>  on changes to types. (Use versioned type names to manage<br>  breaking changes.)<br><br>Note: this functionality is not currently available in the official<br>protobuf release, and it is not used for type URLs beginning with<br>type.googleapis.com.<br><br>Schemes other than `http`, `https` (or the empty scheme) might be<br>used with implementation specific semantics.|
|» jailed|boolean|false|none|jailed defined whether the validator has been jailed from bonded status or not.|
|» status|string|false|none|status is the validator status (bonded/unbonding/unbonded).|
|» tokens|string|false|none|tokens define the delegated tokens (incl. self-delegation).|
|» delegatorShares|string|false|none|delegator_shares defines total shares issued to a validator's delegators.|
|» description|object|false|none|description defines the description terms for the validator.|
|»» moniker|string|false|none|moniker defines a human-readable name for the validator.|
|»» identity|string|false|none|identity defines an optional identity signature (ex. UPort or Keybase).|
|»» website|string|false|none|website defines an optional website link.|
|»» securityContact|string|false|none|security_contact defines an optional email for security contact.|
|»» details|string|false|none|details define other optional details.|
|» unbondingHeight|string(int64)|false|none|unbonding_height defines, if unbonding, the height at which this validator has begun unbonding.|
|» unbondingTime|string(date-time)|false|none|unbonding_time defines, if unbonding, the min time for the validator to complete unbonding.|
|» commission|object|false|none|commission defines the commission parameters.|
|»» commissionRates|object|false|none|commission_rates defines the initial commission rates to be used for creating a validator.|
|»»» rate|string|false|none|rate is the commission rate charged to delegators, as a fraction.|
|»»» maxRate|string|false|none|max_rate defines the maximum commission rate which validator can ever charge, as a fraction.|
|»»» maxChangeRate|string|false|none|max_change_rate defines the maximum daily increase of the validator commission, as a fraction.|
|»» updateTime|string(date-time)|false|none|update_time is the last time the commission rate was changed.|
|» minSelfDelegation|string|false|none|min_self_delegation is the validator's self declared minimum self delegation.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|BOND_STATUS_UNSPECIFIED|
|status|BOND_STATUS_UNBONDED|
|status|BOND_STATUS_UNBONDING|
|status|BOND_STATUS_BONDED|

<h2 id="tocS_cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsResponse">cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.staking.v1beta1.queryvalidatorunbondingdelegationsresponse"></a>
<a id="schema_cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsResponse"></a>
<a id="tocScosmos.staking.v1beta1.queryvalidatorunbondingdelegationsresponse"></a>
<a id="tocscosmos.staking.v1beta1.queryvalidatorunbondingdelegationsresponse"></a>

```json
{
  "unbondingResponses": [
    {
      "delegatorAddress": "string",
      "validatorAddress": "string",
      "entries": [
        {
          "creationHeight": "string",
          "completionTime": "2019-08-24T14:15:22Z",
          "initialBalance": "string",
          "balance": "string"
        }
      ]
    }
  ],
  "pagination": {
    "nextKey": "string",
    "total": "string"
  }
}

```

QueryValidatorUnbondingDelegationsResponse is response type for the
Query/ValidatorUnbondingDelegations RPC method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|unbondingResponses|[object]|false|none|none|
|» delegatorAddress|string|false|none|delegator_address is the bech32-encoded address of the delegator.|
|» validatorAddress|string|false|none|validator_address is the bech32-encoded address of the validator.|
|» entries|[object]|false|none|entries are the unbonding delegation entries.|
|»» creationHeight|string(int64)|false|none|creation_height is the height which the unbonding took place.|
|»» completionTime|string(date-time)|false|none|completion_time is the unix time for unbonding completion.|
|»» initialBalance|string|false|none|initial_balance defines the tokens initially scheduled to receive at completion.|
|»» balance|string|false|none|balance defines the tokens to receive at completion.|
|pagination|object|false|none|pagination defines the pagination in the response.|
|» nextKey|string(byte)|false|none|none|
|» total|string(uint64)|false|none|none|

<h2 id="tocS_cosmos.staking.v1beta1.QueryValidatorsResponse">cosmos.staking.v1beta1.QueryValidatorsResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.staking.v1beta1.queryvalidatorsresponse"></a>
<a id="schema_cosmos.staking.v1beta1.QueryValidatorsResponse"></a>
<a id="tocScosmos.staking.v1beta1.queryvalidatorsresponse"></a>
<a id="tocscosmos.staking.v1beta1.queryvalidatorsresponse"></a>

```json
{
  "validators": [
    {
      "operatorAddress": "string",
      "consensusPubkey": {
        "@type": "string",
        "property1": null,
        "property2": null
      },
      "jailed": true,
      "status": "BOND_STATUS_UNSPECIFIED",
      "tokens": "string",
      "delegatorShares": "string",
      "description": {
        "moniker": "string",
        "identity": "string",
        "website": "string",
        "securityContact": "string",
        "details": "string"
      },
      "unbondingHeight": "string",
      "unbondingTime": "2019-08-24T14:15:22Z",
      "commission": {
        "commissionRates": {
          "rate": "string",
          "maxRate": "string",
          "maxChangeRate": "string"
        },
        "updateTime": "2019-08-24T14:15:22Z"
      },
      "minSelfDelegation": "string"
    }
  ],
  "pagination": {
    "nextKey": "string",
    "total": "string"
  }
}

```

QueryValidatorsResponse is response type for the Query/Validators RPC method

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|validators|[object]|false|none|validators contains all the queried validators.|
|» operatorAddress|string|false|none|operator_address defines the address of the validator's operator; bech encoded in JSON.|
|» consensusPubkey|object|false|none|`Any` contains an arbitrary serialized protocol buffer message along with a<br>URL that describes the type of the serialized message.<br><br>Protobuf library provides support to pack/unpack Any values in the form<br>of utility functions or additional generated methods of the Any type.<br><br>Example 1: Pack and unpack a message in C++.<br><br>    Foo foo = ...;<br>    Any any;<br>    any.PackFrom(foo);<br>    ...<br>    if (any.UnpackTo(&foo)) {<br>      ...<br>    }<br><br>Example 2: Pack and unpack a message in Java.<br><br>    Foo foo = ...;<br>    Any any = Any.pack(foo);<br>    ...<br>    if (any.is(Foo.class)) {<br>      foo = any.unpack(Foo.class);<br>    }<br><br> Example 3: Pack and unpack a message in Python.<br><br>    foo = Foo(...)<br>    any = Any()<br>    any.Pack(foo)<br>    ...<br>    if any.Is(Foo.DESCRIPTOR):<br>      any.Unpack(foo)<br>      ...<br><br> Example 4: Pack and unpack a message in Go<br><br>     foo := &pb.Foo{...}<br>     any, err := anypb.New(foo)<br>     if err != nil {<br>       ...<br>     }<br>     ...<br>     foo := &pb.Foo{}<br>     if err := any.UnmarshalTo(foo); err != nil {<br>       ...<br>     }<br><br>The pack methods provided by protobuf library will by default use<br>'type.googleapis.com/full.type.name' as the type URL and the unpack<br>methods only use the fully qualified type name after the last '/'<br>in the type URL, for example "foo.bar.com/x/y.z" will yield type<br>name "y.z".<br><br><br>JSON<br>====<br>The JSON representation of an `Any` value uses the regular<br>representation of the deserialized, embedded message, with an<br>additional field `@type` which contains the type URL. Example:<br><br>    package google.profile;<br>    message Person {<br>      string first_name = 1;<br>      string last_name = 2;<br>    }<br><br>    {<br>      "@type": "type.googleapis.com/google.profile.Person",<br>      "firstName": <string>,<br>      "lastName": <string><br>    }<br><br>If the embedded message type is well-known and has a custom JSON<br>representation, that representation will be embedded adding a field<br>`value` which holds the custom JSON in addition to the `@type`<br>field. Example (for message [google.protobuf.Duration][]):<br><br>    {<br>      "@type": "type.googleapis.com/google.protobuf.Duration",<br>      "value": "1.212s"<br>    }|
|»» **additionalProperties**|any|false|none|none|
|»» @type|string|false|none|A URL/resource name that uniquely identifies the type of the serialized<br>protocol buffer message. This string must contain at least<br>one "/" character. The last segment of the URL's path must represent<br>the fully qualified name of the type (as in<br>`path/google.protobuf.Duration`). The name should be in a canonical form<br>(e.g., leading "." is not accepted).<br><br>In practice, teams usually precompile into the binary all types that they<br>expect it to use in the context of Any. However, for URLs which use the<br>scheme `http`, `https`, or no scheme, one can optionally set up a type<br>server that maps type URLs to message definitions as follows:<br><br>* If no scheme is provided, `https` is assumed.<br>* An HTTP GET on the URL must yield a [google.protobuf.Type][]<br>  value in binary format, or produce an error.<br>* Applications are allowed to cache lookup results based on the<br>  URL, or have them precompiled into a binary to avoid any<br>  lookup. Therefore, binary compatibility needs to be preserved<br>  on changes to types. (Use versioned type names to manage<br>  breaking changes.)<br><br>Note: this functionality is not currently available in the official<br>protobuf release, and it is not used for type URLs beginning with<br>type.googleapis.com.<br><br>Schemes other than `http`, `https` (or the empty scheme) might be<br>used with implementation specific semantics.|
|» jailed|boolean|false|none|jailed defined whether the validator has been jailed from bonded status or not.|
|» status|string|false|none|status is the validator status (bonded/unbonding/unbonded).|
|» tokens|string|false|none|tokens define the delegated tokens (incl. self-delegation).|
|» delegatorShares|string|false|none|delegator_shares defines total shares issued to a validator's delegators.|
|» description|object|false|none|description defines the description terms for the validator.|
|»» moniker|string|false|none|moniker defines a human-readable name for the validator.|
|»» identity|string|false|none|identity defines an optional identity signature (ex. UPort or Keybase).|
|»» website|string|false|none|website defines an optional website link.|
|»» securityContact|string|false|none|security_contact defines an optional email for security contact.|
|»» details|string|false|none|details define other optional details.|
|» unbondingHeight|string(int64)|false|none|unbonding_height defines, if unbonding, the height at which this validator has begun unbonding.|
|» unbondingTime|string(date-time)|false|none|unbonding_time defines, if unbonding, the min time for the validator to complete unbonding.|
|» commission|object|false|none|commission defines the commission parameters.|
|»» commissionRates|object|false|none|commission_rates defines the initial commission rates to be used for creating a validator.|
|»»» rate|string|false|none|rate is the commission rate charged to delegators, as a fraction.|
|»»» maxRate|string|false|none|max_rate defines the maximum commission rate which validator can ever charge, as a fraction.|
|»»» maxChangeRate|string|false|none|max_change_rate defines the maximum daily increase of the validator commission, as a fraction.|
|»» updateTime|string(date-time)|false|none|update_time is the last time the commission rate was changed.|
|» minSelfDelegation|string|false|none|min_self_delegation is the validator's self declared minimum self delegation.|
|pagination|object|false|none|pagination defines the pagination in the response.|
|» nextKey|string(byte)|false|none|none|
|» total|string(uint64)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|BOND_STATUS_UNSPECIFIED|
|status|BOND_STATUS_UNBONDED|
|status|BOND_STATUS_UNBONDING|
|status|BOND_STATUS_BONDED|

<h2 id="tocS_cosmos.staking.v1beta1.Redelegation">cosmos.staking.v1beta1.Redelegation</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.staking.v1beta1.redelegation"></a>
<a id="schema_cosmos.staking.v1beta1.Redelegation"></a>
<a id="tocScosmos.staking.v1beta1.redelegation"></a>
<a id="tocscosmos.staking.v1beta1.redelegation"></a>

```json
{
  "delegatorAddress": "string",
  "validatorSrcAddress": "string",
  "validatorDstAddress": "string",
  "entries": [
    {
      "creationHeight": "string",
      "completionTime": "2019-08-24T14:15:22Z",
      "initialBalance": "string",
      "sharesDst": "string"
    }
  ]
}

```

Redelegation contains the list of a particular delegator's redelegating bonds
from a particular source validator to a particular destination validator.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|delegatorAddress|string|false|none|delegator_address is the bech32-encoded address of the delegator.|
|validatorSrcAddress|string|false|none|validator_src_address is the validator redelegation source operator address.|
|validatorDstAddress|string|false|none|validator_dst_address is the validator redelegation destination operator address.|
|entries|[object]|false|none|entries are the redelegation entries.|
|» creationHeight|string(int64)|false|none|creation_height  defines the height which the redelegation took place.|
|» completionTime|string(date-time)|false|none|completion_time defines the unix time for redelegation completion.|
|» initialBalance|string|false|none|initial_balance defines the initial balance when redelegation started.|
|» sharesDst|string|false|none|shares_dst is the amount of destination-validator shares created by redelegation.|

<h2 id="tocS_cosmos.staking.v1beta1.RedelegationEntry">cosmos.staking.v1beta1.RedelegationEntry</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.staking.v1beta1.redelegationentry"></a>
<a id="schema_cosmos.staking.v1beta1.RedelegationEntry"></a>
<a id="tocScosmos.staking.v1beta1.redelegationentry"></a>
<a id="tocscosmos.staking.v1beta1.redelegationentry"></a>

```json
{
  "creationHeight": "string",
  "completionTime": "2019-08-24T14:15:22Z",
  "initialBalance": "string",
  "sharesDst": "string"
}

```

RedelegationEntry defines a redelegation object with relevant metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|creationHeight|string(int64)|false|none|creation_height  defines the height which the redelegation took place.|
|completionTime|string(date-time)|false|none|completion_time defines the unix time for redelegation completion.|
|initialBalance|string|false|none|initial_balance defines the initial balance when redelegation started.|
|sharesDst|string|false|none|shares_dst is the amount of destination-validator shares created by redelegation.|

<h2 id="tocS_cosmos.staking.v1beta1.RedelegationEntryResponse">cosmos.staking.v1beta1.RedelegationEntryResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.staking.v1beta1.redelegationentryresponse"></a>
<a id="schema_cosmos.staking.v1beta1.RedelegationEntryResponse"></a>
<a id="tocScosmos.staking.v1beta1.redelegationentryresponse"></a>
<a id="tocscosmos.staking.v1beta1.redelegationentryresponse"></a>

```json
{
  "redelegationEntry": {
    "creationHeight": "string",
    "completionTime": "2019-08-24T14:15:22Z",
    "initialBalance": "string",
    "sharesDst": "string"
  },
  "balance": "string"
}

```

RedelegationEntryResponse is equivalent to a RedelegationEntry except that it
contains a balance in addition to shares which is more suitable for client
responses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|redelegationEntry|object|false|none|RedelegationEntry defines a redelegation object with relevant metadata.|
|» creationHeight|string(int64)|false|none|creation_height  defines the height which the redelegation took place.|
|» completionTime|string(date-time)|false|none|completion_time defines the unix time for redelegation completion.|
|» initialBalance|string|false|none|initial_balance defines the initial balance when redelegation started.|
|» sharesDst|string|false|none|shares_dst is the amount of destination-validator shares created by redelegation.|
|balance|string|false|none|none|

<h2 id="tocS_cosmos.staking.v1beta1.RedelegationResponse">cosmos.staking.v1beta1.RedelegationResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.staking.v1beta1.redelegationresponse"></a>
<a id="schema_cosmos.staking.v1beta1.RedelegationResponse"></a>
<a id="tocScosmos.staking.v1beta1.redelegationresponse"></a>
<a id="tocscosmos.staking.v1beta1.redelegationresponse"></a>

```json
{
  "redelegation": {
    "delegatorAddress": "string",
    "validatorSrcAddress": "string",
    "validatorDstAddress": "string",
    "entries": [
      {
        "creationHeight": "string",
        "completionTime": "2019-08-24T14:15:22Z",
        "initialBalance": "string",
        "sharesDst": "string"
      }
    ]
  },
  "entries": [
    {
      "redelegationEntry": {
        "creationHeight": "string",
        "completionTime": "2019-08-24T14:15:22Z",
        "initialBalance": "string",
        "sharesDst": "string"
      },
      "balance": "string"
    }
  ]
}

```

RedelegationResponse is equivalent to a Redelegation except that its entries
contain a balance in addition to shares which is more suitable for client
responses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|redelegation|object|false|none|Redelegation contains the list of a particular delegator's redelegating bonds<br>from a particular source validator to a particular destination validator.|
|» delegatorAddress|string|false|none|delegator_address is the bech32-encoded address of the delegator.|
|» validatorSrcAddress|string|false|none|validator_src_address is the validator redelegation source operator address.|
|» validatorDstAddress|string|false|none|validator_dst_address is the validator redelegation destination operator address.|
|» entries|[object]|false|none|entries are the redelegation entries.|
|»» creationHeight|string(int64)|false|none|creation_height  defines the height which the redelegation took place.|
|»» completionTime|string(date-time)|false|none|completion_time defines the unix time for redelegation completion.|
|»» initialBalance|string|false|none|initial_balance defines the initial balance when redelegation started.|
|»» sharesDst|string|false|none|shares_dst is the amount of destination-validator shares created by redelegation.|
|entries|[object]|false|none|none|
|» redelegationEntry|object|false|none|RedelegationEntry defines a redelegation object with relevant metadata.|
|»» creationHeight|string(int64)|false|none|creation_height  defines the height which the redelegation took place.|
|»» completionTime|string(date-time)|false|none|completion_time defines the unix time for redelegation completion.|
|»» initialBalance|string|false|none|initial_balance defines the initial balance when redelegation started.|
|»» sharesDst|string|false|none|shares_dst is the amount of destination-validator shares created by redelegation.|
|» balance|string|false|none|none|

<h2 id="tocS_cosmos.staking.v1beta1.UnbondingDelegation">cosmos.staking.v1beta1.UnbondingDelegation</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.staking.v1beta1.unbondingdelegation"></a>
<a id="schema_cosmos.staking.v1beta1.UnbondingDelegation"></a>
<a id="tocScosmos.staking.v1beta1.unbondingdelegation"></a>
<a id="tocscosmos.staking.v1beta1.unbondingdelegation"></a>

```json
{
  "delegatorAddress": "string",
  "validatorAddress": "string",
  "entries": [
    {
      "creationHeight": "string",
      "completionTime": "2019-08-24T14:15:22Z",
      "initialBalance": "string",
      "balance": "string"
    }
  ]
}

```

UnbondingDelegation stores all of a single delegator's unbonding bonds
for a single validator in an time-ordered list.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|delegatorAddress|string|false|none|delegator_address is the bech32-encoded address of the delegator.|
|validatorAddress|string|false|none|validator_address is the bech32-encoded address of the validator.|
|entries|[object]|false|none|entries are the unbonding delegation entries.|
|» creationHeight|string(int64)|false|none|creation_height is the height which the unbonding took place.|
|» completionTime|string(date-time)|false|none|completion_time is the unix time for unbonding completion.|
|» initialBalance|string|false|none|initial_balance defines the tokens initially scheduled to receive at completion.|
|» balance|string|false|none|balance defines the tokens to receive at completion.|

<h2 id="tocS_cosmos.staking.v1beta1.UnbondingDelegationEntry">cosmos.staking.v1beta1.UnbondingDelegationEntry</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.staking.v1beta1.unbondingdelegationentry"></a>
<a id="schema_cosmos.staking.v1beta1.UnbondingDelegationEntry"></a>
<a id="tocScosmos.staking.v1beta1.unbondingdelegationentry"></a>
<a id="tocscosmos.staking.v1beta1.unbondingdelegationentry"></a>

```json
{
  "creationHeight": "string",
  "completionTime": "2019-08-24T14:15:22Z",
  "initialBalance": "string",
  "balance": "string"
}

```

UnbondingDelegationEntry defines an unbonding object with relevant metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|creationHeight|string(int64)|false|none|creation_height is the height which the unbonding took place.|
|completionTime|string(date-time)|false|none|completion_time is the unix time for unbonding completion.|
|initialBalance|string|false|none|initial_balance defines the tokens initially scheduled to receive at completion.|
|balance|string|false|none|balance defines the tokens to receive at completion.|

<h2 id="tocS_cosmos.staking.v1beta1.Validator">cosmos.staking.v1beta1.Validator</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.staking.v1beta1.validator"></a>
<a id="schema_cosmos.staking.v1beta1.Validator"></a>
<a id="tocScosmos.staking.v1beta1.validator"></a>
<a id="tocscosmos.staking.v1beta1.validator"></a>

```json
{
  "operatorAddress": "string",
  "consensusPubkey": {
    "@type": "string",
    "property1": null,
    "property2": null
  },
  "jailed": true,
  "status": "BOND_STATUS_UNSPECIFIED",
  "tokens": "string",
  "delegatorShares": "string",
  "description": {
    "moniker": "string",
    "identity": "string",
    "website": "string",
    "securityContact": "string",
    "details": "string"
  },
  "unbondingHeight": "string",
  "unbondingTime": "2019-08-24T14:15:22Z",
  "commission": {
    "commissionRates": {
      "rate": "string",
      "maxRate": "string",
      "maxChangeRate": "string"
    },
    "updateTime": "2019-08-24T14:15:22Z"
  },
  "minSelfDelegation": "string"
}

```

Validator defines a validator, together with the total amount of the
Validator's bond shares and their exchange rate to coins. Slashing results in
a decrease in the exchange rate, allowing correct calculation of future
undelegations without iterating over delegators. When coins are delegated to
this validator, the validator is credited with a delegation whose number of
bond shares is based on the amount of coins delegated divided by the current
exchange rate. Voting power can be calculated as total bonded shares
multiplied by exchange rate.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operatorAddress|string|false|none|operator_address defines the address of the validator's operator; bech encoded in JSON.|
|consensusPubkey|object|false|none|`Any` contains an arbitrary serialized protocol buffer message along with a<br>URL that describes the type of the serialized message.<br><br>Protobuf library provides support to pack/unpack Any values in the form<br>of utility functions or additional generated methods of the Any type.<br><br>Example 1: Pack and unpack a message in C++.<br><br>    Foo foo = ...;<br>    Any any;<br>    any.PackFrom(foo);<br>    ...<br>    if (any.UnpackTo(&foo)) {<br>      ...<br>    }<br><br>Example 2: Pack and unpack a message in Java.<br><br>    Foo foo = ...;<br>    Any any = Any.pack(foo);<br>    ...<br>    if (any.is(Foo.class)) {<br>      foo = any.unpack(Foo.class);<br>    }<br><br> Example 3: Pack and unpack a message in Python.<br><br>    foo = Foo(...)<br>    any = Any()<br>    any.Pack(foo)<br>    ...<br>    if any.Is(Foo.DESCRIPTOR):<br>      any.Unpack(foo)<br>      ...<br><br> Example 4: Pack and unpack a message in Go<br><br>     foo := &pb.Foo{...}<br>     any, err := anypb.New(foo)<br>     if err != nil {<br>       ...<br>     }<br>     ...<br>     foo := &pb.Foo{}<br>     if err := any.UnmarshalTo(foo); err != nil {<br>       ...<br>     }<br><br>The pack methods provided by protobuf library will by default use<br>'type.googleapis.com/full.type.name' as the type URL and the unpack<br>methods only use the fully qualified type name after the last '/'<br>in the type URL, for example "foo.bar.com/x/y.z" will yield type<br>name "y.z".<br><br><br>JSON<br>====<br>The JSON representation of an `Any` value uses the regular<br>representation of the deserialized, embedded message, with an<br>additional field `@type` which contains the type URL. Example:<br><br>    package google.profile;<br>    message Person {<br>      string first_name = 1;<br>      string last_name = 2;<br>    }<br><br>    {<br>      "@type": "type.googleapis.com/google.profile.Person",<br>      "firstName": <string>,<br>      "lastName": <string><br>    }<br><br>If the embedded message type is well-known and has a custom JSON<br>representation, that representation will be embedded adding a field<br>`value` which holds the custom JSON in addition to the `@type`<br>field. Example (for message [google.protobuf.Duration][]):<br><br>    {<br>      "@type": "type.googleapis.com/google.protobuf.Duration",<br>      "value": "1.212s"<br>    }|
|» **additionalProperties**|any|false|none|none|
|» @type|string|false|none|A URL/resource name that uniquely identifies the type of the serialized<br>protocol buffer message. This string must contain at least<br>one "/" character. The last segment of the URL's path must represent<br>the fully qualified name of the type (as in<br>`path/google.protobuf.Duration`). The name should be in a canonical form<br>(e.g., leading "." is not accepted).<br><br>In practice, teams usually precompile into the binary all types that they<br>expect it to use in the context of Any. However, for URLs which use the<br>scheme `http`, `https`, or no scheme, one can optionally set up a type<br>server that maps type URLs to message definitions as follows:<br><br>* If no scheme is provided, `https` is assumed.<br>* An HTTP GET on the URL must yield a [google.protobuf.Type][]<br>  value in binary format, or produce an error.<br>* Applications are allowed to cache lookup results based on the<br>  URL, or have them precompiled into a binary to avoid any<br>  lookup. Therefore, binary compatibility needs to be preserved<br>  on changes to types. (Use versioned type names to manage<br>  breaking changes.)<br><br>Note: this functionality is not currently available in the official<br>protobuf release, and it is not used for type URLs beginning with<br>type.googleapis.com.<br><br>Schemes other than `http`, `https` (or the empty scheme) might be<br>used with implementation specific semantics.|
|jailed|boolean|false|none|jailed defined whether the validator has been jailed from bonded status or not.|
|status|string|false|none|status is the validator status (bonded/unbonding/unbonded).|
|tokens|string|false|none|tokens define the delegated tokens (incl. self-delegation).|
|delegatorShares|string|false|none|delegator_shares defines total shares issued to a validator's delegators.|
|description|object|false|none|description defines the description terms for the validator.|
|» moniker|string|false|none|moniker defines a human-readable name for the validator.|
|» identity|string|false|none|identity defines an optional identity signature (ex. UPort or Keybase).|
|» website|string|false|none|website defines an optional website link.|
|» securityContact|string|false|none|security_contact defines an optional email for security contact.|
|» details|string|false|none|details define other optional details.|
|unbondingHeight|string(int64)|false|none|unbonding_height defines, if unbonding, the height at which this validator has begun unbonding.|
|unbondingTime|string(date-time)|false|none|unbonding_time defines, if unbonding, the min time for the validator to complete unbonding.|
|commission|object|false|none|commission defines the commission parameters.|
|» commissionRates|object|false|none|commission_rates defines the initial commission rates to be used for creating a validator.|
|»» rate|string|false|none|rate is the commission rate charged to delegators, as a fraction.|
|»» maxRate|string|false|none|max_rate defines the maximum commission rate which validator can ever charge, as a fraction.|
|»» maxChangeRate|string|false|none|max_change_rate defines the maximum daily increase of the validator commission, as a fraction.|
|» updateTime|string(date-time)|false|none|update_time is the last time the commission rate was changed.|
|minSelfDelegation|string|false|none|min_self_delegation is the validator's self declared minimum self delegation.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|BOND_STATUS_UNSPECIFIED|
|status|BOND_STATUS_UNBONDED|
|status|BOND_STATUS_UNBONDING|
|status|BOND_STATUS_BONDED|

<h2 id="tocS_tendermint.types.BlockID">tendermint.types.BlockID</h2>
<!-- backwards compatibility -->
<a id="schematendermint.types.blockid"></a>
<a id="schema_tendermint.types.BlockID"></a>
<a id="tocStendermint.types.blockid"></a>
<a id="tocstendermint.types.blockid"></a>

```json
{
  "hash": "string",
  "partSetHeader": {
    "total": 0,
    "hash": "string"
  }
}

```

BlockID

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hash|string(byte)|false|none|none|
|partSetHeader|object|false|none|none|
|» total|integer(int64)|false|none|none|
|» hash|string(byte)|false|none|none|

<h2 id="tocS_tendermint.types.Header">tendermint.types.Header</h2>
<!-- backwards compatibility -->
<a id="schematendermint.types.header"></a>
<a id="schema_tendermint.types.Header"></a>
<a id="tocStendermint.types.header"></a>
<a id="tocstendermint.types.header"></a>

```json
{
  "version": {
    "block": "string",
    "app": "string"
  },
  "chainId": "string",
  "height": "string",
  "time": "2019-08-24T14:15:22Z",
  "lastBlockId": {
    "hash": "string",
    "partSetHeader": {
      "total": 0,
      "hash": "string"
    }
  },
  "lastCommitHash": "string",
  "dataHash": "string",
  "validatorsHash": "string",
  "nextValidatorsHash": "string",
  "consensusHash": "string",
  "appHash": "string",
  "lastResultsHash": "string",
  "evidenceHash": "string",
  "proposerAddress": "string"
}

```

Header defines the structure of a Tendermint block header.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|version|object|false|none|Consensus captures the consensus rules for processing a block in the blockchain,<br>including all blockchain data structures and the rules of the application's<br>state transition machine.|
|» block|string(uint64)|false|none|none|
|» app|string(uint64)|false|none|none|
|chainId|string|false|none|none|
|height|string(int64)|false|none|none|
|time|string(date-time)|false|none|none|
|lastBlockId|object|false|none|none|
|» hash|string(byte)|false|none|none|
|» partSetHeader|object|false|none|none|
|»» total|integer(int64)|false|none|none|
|»» hash|string(byte)|false|none|none|
|lastCommitHash|string(byte)|false|none|none|
|dataHash|string(byte)|false|none|none|
|validatorsHash|string(byte)|false|none|none|
|nextValidatorsHash|string(byte)|false|none|none|
|consensusHash|string(byte)|false|none|none|
|appHash|string(byte)|false|none|none|
|lastResultsHash|string(byte)|false|none|none|
|evidenceHash|string(byte)|false|none|none|
|proposerAddress|string(byte)|false|none|none|

<h2 id="tocS_tendermint.types.PartSetHeader">tendermint.types.PartSetHeader</h2>
<!-- backwards compatibility -->
<a id="schematendermint.types.partsetheader"></a>
<a id="schema_tendermint.types.PartSetHeader"></a>
<a id="tocStendermint.types.partsetheader"></a>
<a id="tocstendermint.types.partsetheader"></a>

```json
{
  "total": 0,
  "hash": "string"
}

```

PartsetHeader

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer(int64)|false|none|none|
|hash|string(byte)|false|none|none|

<h2 id="tocS_tendermint.version.Consensus">tendermint.version.Consensus</h2>
<!-- backwards compatibility -->
<a id="schematendermint.version.consensus"></a>
<a id="schema_tendermint.version.Consensus"></a>
<a id="tocStendermint.version.consensus"></a>
<a id="tocstendermint.version.consensus"></a>

```json
{
  "block": "string",
  "app": "string"
}

```

Consensus captures the consensus rules for processing a block in the blockchain,
including all blockchain data structures and the rules of the application's
state transition machine.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|block|string(uint64)|false|none|none|
|app|string(uint64)|false|none|none|

<h2 id="tocS_cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse">cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmos.vesting.v1beta1.msgcreatevestingaccountresponse"></a>
<a id="schema_cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse"></a>
<a id="tocScosmos.vesting.v1beta1.msgcreatevestingaccountresponse"></a>
<a id="tocscosmos.vesting.v1beta1.msgcreatevestingaccountresponse"></a>

```json
{}

```

MsgCreateVestingAccountResponse defines the Msg/CreateVestingAccount response type.

### Properties

*None*

<h2 id="tocS_cosmwasm.wasm.v1.AbsoluteTxPosition">cosmwasm.wasm.v1.AbsoluteTxPosition</h2>
<!-- backwards compatibility -->
<a id="schemacosmwasm.wasm.v1.absolutetxposition"></a>
<a id="schema_cosmwasm.wasm.v1.AbsoluteTxPosition"></a>
<a id="tocScosmwasm.wasm.v1.absolutetxposition"></a>
<a id="tocscosmwasm.wasm.v1.absolutetxposition"></a>

```json
{
  "blockHeight": "string",
  "txIndex": "string"
}

```

AbsoluteTxPosition is a unique transaction position that allows for global
ordering of transactions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blockHeight|string(uint64)|false|none|none|
|txIndex|string(uint64)|false|none|none|

<h2 id="tocS_cosmwasm.wasm.v1.AccessConfig">cosmwasm.wasm.v1.AccessConfig</h2>
<!-- backwards compatibility -->
<a id="schemacosmwasm.wasm.v1.accessconfig"></a>
<a id="schema_cosmwasm.wasm.v1.AccessConfig"></a>
<a id="tocScosmwasm.wasm.v1.accessconfig"></a>
<a id="tocscosmwasm.wasm.v1.accessconfig"></a>

```json
{
  "permission": "ACCESS_TYPE_UNSPECIFIED",
  "address": "string"
}

```

AccessConfig access control type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|permission|string|false|none|- ACCESS_TYPE_UNSPECIFIED: AccessTypeUnspecified placeholder for empty value<br> - ACCESS_TYPE_NOBODY: AccessTypeNobody forbidden<br> - ACCESS_TYPE_ONLY_ADDRESS: AccessTypeOnlyAddress restricted to an address<br> - ACCESS_TYPE_EVERYBODY: AccessTypeEverybody unrestricted|
|address|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|permission|ACCESS_TYPE_UNSPECIFIED|
|permission|ACCESS_TYPE_NOBODY|
|permission|ACCESS_TYPE_ONLY_ADDRESS|
|permission|ACCESS_TYPE_EVERYBODY|

<h2 id="tocS_cosmwasm.wasm.v1.AccessType">cosmwasm.wasm.v1.AccessType</h2>
<!-- backwards compatibility -->
<a id="schemacosmwasm.wasm.v1.accesstype"></a>
<a id="schema_cosmwasm.wasm.v1.AccessType"></a>
<a id="tocScosmwasm.wasm.v1.accesstype"></a>
<a id="tocscosmwasm.wasm.v1.accesstype"></a>

```json
"ACCESS_TYPE_UNSPECIFIED"

```

AccessType permission types

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccessType permission types|string|false|none|- ACCESS_TYPE_UNSPECIFIED: AccessTypeUnspecified placeholder for empty value<br> - ACCESS_TYPE_NOBODY: AccessTypeNobody forbidden<br> - ACCESS_TYPE_ONLY_ADDRESS: AccessTypeOnlyAddress restricted to an address<br> - ACCESS_TYPE_EVERYBODY: AccessTypeEverybody unrestricted|

#### Enumerated Values

|Property|Value|
|---|---|
|AccessType permission types|ACCESS_TYPE_UNSPECIFIED|
|AccessType permission types|ACCESS_TYPE_NOBODY|
|AccessType permission types|ACCESS_TYPE_ONLY_ADDRESS|
|AccessType permission types|ACCESS_TYPE_EVERYBODY|

<h2 id="tocS_cosmwasm.wasm.v1.CodeInfoResponse">cosmwasm.wasm.v1.CodeInfoResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmwasm.wasm.v1.codeinforesponse"></a>
<a id="schema_cosmwasm.wasm.v1.CodeInfoResponse"></a>
<a id="tocScosmwasm.wasm.v1.codeinforesponse"></a>
<a id="tocscosmwasm.wasm.v1.codeinforesponse"></a>

```json
{
  "codeId": "string",
  "creator": "string",
  "dataHash": "string"
}

```

CodeInfoResponse contains code meta data from CodeInfo

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|codeId|string(uint64)|false|none|none|
|creator|string|false|none|none|
|dataHash|string(byte)|false|none|none|

<h2 id="tocS_cosmwasm.wasm.v1.ContractCodeHistoryEntry">cosmwasm.wasm.v1.ContractCodeHistoryEntry</h2>
<!-- backwards compatibility -->
<a id="schemacosmwasm.wasm.v1.contractcodehistoryentry"></a>
<a id="schema_cosmwasm.wasm.v1.ContractCodeHistoryEntry"></a>
<a id="tocScosmwasm.wasm.v1.contractcodehistoryentry"></a>
<a id="tocscosmwasm.wasm.v1.contractcodehistoryentry"></a>

```json
{
  "operation": "CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED",
  "codeId": "string",
  "updated": {
    "blockHeight": "string",
    "txIndex": "string"
  },
  "msg": "string"
}

```

ContractCodeHistoryEntry metadata to a contract.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operation|string|false|none|- CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED: ContractCodeHistoryOperationTypeUnspecified placeholder for empty value<br> - CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT: ContractCodeHistoryOperationTypeInit on chain contract instantiation<br> - CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE: ContractCodeHistoryOperationTypeMigrate code migration<br> - CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS: ContractCodeHistoryOperationTypeGenesis based on genesis data|
|codeId|string(uint64)|false|none|none|
|updated|object|false|none|Updated Tx position when the operation was executed.|
|» blockHeight|string(uint64)|false|none|none|
|» txIndex|string(uint64)|false|none|none|
|msg|string(byte)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|operation|CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED|
|operation|CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT|
|operation|CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE|
|operation|CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS|

<h2 id="tocS_cosmwasm.wasm.v1.ContractCodeHistoryOperationType">cosmwasm.wasm.v1.ContractCodeHistoryOperationType</h2>
<!-- backwards compatibility -->
<a id="schemacosmwasm.wasm.v1.contractcodehistoryoperationtype"></a>
<a id="schema_cosmwasm.wasm.v1.ContractCodeHistoryOperationType"></a>
<a id="tocScosmwasm.wasm.v1.contractcodehistoryoperationtype"></a>
<a id="tocscosmwasm.wasm.v1.contractcodehistoryoperationtype"></a>

```json
"CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED"

```

ContractCodeHistoryOperationType actions that caused a code change

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContractCodeHistoryOperationType actions that caused a code change|string|false|none|- CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED: ContractCodeHistoryOperationTypeUnspecified placeholder for empty value<br> - CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT: ContractCodeHistoryOperationTypeInit on chain contract instantiation<br> - CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE: ContractCodeHistoryOperationTypeMigrate code migration<br> - CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS: ContractCodeHistoryOperationTypeGenesis based on genesis data|

#### Enumerated Values

|Property|Value|
|---|---|
|ContractCodeHistoryOperationType actions that caused a code change|CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED|
|ContractCodeHistoryOperationType actions that caused a code change|CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT|
|ContractCodeHistoryOperationType actions that caused a code change|CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE|
|ContractCodeHistoryOperationType actions that caused a code change|CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS|

<h2 id="tocS_cosmwasm.wasm.v1.ContractInfo">cosmwasm.wasm.v1.ContractInfo</h2>
<!-- backwards compatibility -->
<a id="schemacosmwasm.wasm.v1.contractinfo"></a>
<a id="schema_cosmwasm.wasm.v1.ContractInfo"></a>
<a id="tocScosmwasm.wasm.v1.contractinfo"></a>
<a id="tocscosmwasm.wasm.v1.contractinfo"></a>

```json
{
  "codeId": "string",
  "creator": "string",
  "admin": "string",
  "label": "string",
  "created": {
    "blockHeight": "string",
    "txIndex": "string"
  },
  "ibcPortId": "string",
  "extension": {
    "@type": "string",
    "property1": null,
    "property2": null
  }
}

```

ContractInfo stores a WASM contract instance

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|codeId|string(uint64)|false|none|none|
|creator|string|false|none|none|
|admin|string|false|none|none|
|label|string|false|none|Label is optional metadata to be stored with a contract instance.|
|created|object|false|none|AbsoluteTxPosition is a unique transaction position that allows for global<br>ordering of transactions.|
|» blockHeight|string(uint64)|false|none|none|
|» txIndex|string(uint64)|false|none|none|
|ibcPortId|string|false|none|none|
|extension|object|false|none|`Any` contains an arbitrary serialized protocol buffer message along with a<br>URL that describes the type of the serialized message.<br><br>Protobuf library provides support to pack/unpack Any values in the form<br>of utility functions or additional generated methods of the Any type.<br><br>Example 1: Pack and unpack a message in C++.<br><br>    Foo foo = ...;<br>    Any any;<br>    any.PackFrom(foo);<br>    ...<br>    if (any.UnpackTo(&foo)) {<br>      ...<br>    }<br><br>Example 2: Pack and unpack a message in Java.<br><br>    Foo foo = ...;<br>    Any any = Any.pack(foo);<br>    ...<br>    if (any.is(Foo.class)) {<br>      foo = any.unpack(Foo.class);<br>    }<br><br> Example 3: Pack and unpack a message in Python.<br><br>    foo = Foo(...)<br>    any = Any()<br>    any.Pack(foo)<br>    ...<br>    if any.Is(Foo.DESCRIPTOR):<br>      any.Unpack(foo)<br>      ...<br><br> Example 4: Pack and unpack a message in Go<br><br>     foo := &pb.Foo{...}<br>     any, err := anypb.New(foo)<br>     if err != nil {<br>       ...<br>     }<br>     ...<br>     foo := &pb.Foo{}<br>     if err := any.UnmarshalTo(foo); err != nil {<br>       ...<br>     }<br><br>The pack methods provided by protobuf library will by default use<br>'type.googleapis.com/full.type.name' as the type URL and the unpack<br>methods only use the fully qualified type name after the last '/'<br>in the type URL, for example "foo.bar.com/x/y.z" will yield type<br>name "y.z".<br><br><br>JSON<br>====<br>The JSON representation of an `Any` value uses the regular<br>representation of the deserialized, embedded message, with an<br>additional field `@type` which contains the type URL. Example:<br><br>    package google.profile;<br>    message Person {<br>      string first_name = 1;<br>      string last_name = 2;<br>    }<br><br>    {<br>      "@type": "type.googleapis.com/google.profile.Person",<br>      "firstName": <string>,<br>      "lastName": <string><br>    }<br><br>If the embedded message type is well-known and has a custom JSON<br>representation, that representation will be embedded adding a field<br>`value` which holds the custom JSON in addition to the `@type`<br>field. Example (for message [google.protobuf.Duration][]):<br><br>    {<br>      "@type": "type.googleapis.com/google.protobuf.Duration",<br>      "value": "1.212s"<br>    }|
|» **additionalProperties**|any|false|none|none|
|» @type|string|false|none|A URL/resource name that uniquely identifies the type of the serialized<br>protocol buffer message. This string must contain at least<br>one "/" character. The last segment of the URL's path must represent<br>the fully qualified name of the type (as in<br>`path/google.protobuf.Duration`). The name should be in a canonical form<br>(e.g., leading "." is not accepted).<br><br>In practice, teams usually precompile into the binary all types that they<br>expect it to use in the context of Any. However, for URLs which use the<br>scheme `http`, `https`, or no scheme, one can optionally set up a type<br>server that maps type URLs to message definitions as follows:<br><br>* If no scheme is provided, `https` is assumed.<br>* An HTTP GET on the URL must yield a [google.protobuf.Type][]<br>  value in binary format, or produce an error.<br>* Applications are allowed to cache lookup results based on the<br>  URL, or have them precompiled into a binary to avoid any<br>  lookup. Therefore, binary compatibility needs to be preserved<br>  on changes to types. (Use versioned type names to manage<br>  breaking changes.)<br><br>Note: this functionality is not currently available in the official<br>protobuf release, and it is not used for type URLs beginning with<br>type.googleapis.com.<br><br>Schemes other than `http`, `https` (or the empty scheme) might be<br>used with implementation specific semantics.|

<h2 id="tocS_cosmwasm.wasm.v1.Model">cosmwasm.wasm.v1.Model</h2>
<!-- backwards compatibility -->
<a id="schemacosmwasm.wasm.v1.model"></a>
<a id="schema_cosmwasm.wasm.v1.Model"></a>
<a id="tocScosmwasm.wasm.v1.model"></a>
<a id="tocscosmwasm.wasm.v1.model"></a>

```json
{
  "key": "string",
  "value": "string"
}

```

Model is a struct that holds a KV pair

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string(byte)|false|none|none|
|value|string(byte)|false|none|none|

<h2 id="tocS_cosmwasm.wasm.v1.MsgClearAdminResponse">cosmwasm.wasm.v1.MsgClearAdminResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmwasm.wasm.v1.msgclearadminresponse"></a>
<a id="schema_cosmwasm.wasm.v1.MsgClearAdminResponse"></a>
<a id="tocScosmwasm.wasm.v1.msgclearadminresponse"></a>
<a id="tocscosmwasm.wasm.v1.msgclearadminresponse"></a>

```json
{}

```

MsgClearAdminResponse returns empty data

### Properties

*None*

<h2 id="tocS_cosmwasm.wasm.v1.MsgExecuteContractResponse">cosmwasm.wasm.v1.MsgExecuteContractResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmwasm.wasm.v1.msgexecutecontractresponse"></a>
<a id="schema_cosmwasm.wasm.v1.MsgExecuteContractResponse"></a>
<a id="tocScosmwasm.wasm.v1.msgexecutecontractresponse"></a>
<a id="tocscosmwasm.wasm.v1.msgexecutecontractresponse"></a>

```json
{
  "data": "string"
}

```

MsgExecuteContractResponse returns execution result data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|string(byte)|false|none|none|

<h2 id="tocS_cosmwasm.wasm.v1.MsgInstantiateContractResponse">cosmwasm.wasm.v1.MsgInstantiateContractResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmwasm.wasm.v1.msginstantiatecontractresponse"></a>
<a id="schema_cosmwasm.wasm.v1.MsgInstantiateContractResponse"></a>
<a id="tocScosmwasm.wasm.v1.msginstantiatecontractresponse"></a>
<a id="tocscosmwasm.wasm.v1.msginstantiatecontractresponse"></a>

```json
{
  "address": "string",
  "data": "string"
}

```

MsgInstantiateContractResponse return instantiation result data

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|false|none|Address is the bech32 address of the new contract instance.|
|data|string(byte)|false|none|none|

<h2 id="tocS_cosmwasm.wasm.v1.MsgMigrateContractResponse">cosmwasm.wasm.v1.MsgMigrateContractResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmwasm.wasm.v1.msgmigratecontractresponse"></a>
<a id="schema_cosmwasm.wasm.v1.MsgMigrateContractResponse"></a>
<a id="tocScosmwasm.wasm.v1.msgmigratecontractresponse"></a>
<a id="tocscosmwasm.wasm.v1.msgmigratecontractresponse"></a>

```json
{
  "data": "string"
}

```

MsgMigrateContractResponse returns contract migration result data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|string(byte)|false|none|none|

<h2 id="tocS_cosmwasm.wasm.v1.MsgStoreCodeResponse">cosmwasm.wasm.v1.MsgStoreCodeResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmwasm.wasm.v1.msgstorecoderesponse"></a>
<a id="schema_cosmwasm.wasm.v1.MsgStoreCodeResponse"></a>
<a id="tocScosmwasm.wasm.v1.msgstorecoderesponse"></a>
<a id="tocscosmwasm.wasm.v1.msgstorecoderesponse"></a>

```json
{
  "codeId": "string"
}

```

MsgStoreCodeResponse returns store result data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|codeId|string(uint64)|false|none|none|

<h2 id="tocS_cosmwasm.wasm.v1.MsgUpdateAdminResponse">cosmwasm.wasm.v1.MsgUpdateAdminResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmwasm.wasm.v1.msgupdateadminresponse"></a>
<a id="schema_cosmwasm.wasm.v1.MsgUpdateAdminResponse"></a>
<a id="tocScosmwasm.wasm.v1.msgupdateadminresponse"></a>
<a id="tocscosmwasm.wasm.v1.msgupdateadminresponse"></a>

```json
{}

```

MsgUpdateAdminResponse returns empty data

### Properties

*None*

<h2 id="tocS_cosmwasm.wasm.v1.QueryAllContractStateResponse">cosmwasm.wasm.v1.QueryAllContractStateResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmwasm.wasm.v1.queryallcontractstateresponse"></a>
<a id="schema_cosmwasm.wasm.v1.QueryAllContractStateResponse"></a>
<a id="tocScosmwasm.wasm.v1.queryallcontractstateresponse"></a>
<a id="tocscosmwasm.wasm.v1.queryallcontractstateresponse"></a>

```json
{
  "models": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "pagination": {
    "nextKey": "string",
    "total": "string"
  }
}

```

QueryAllContractStateResponse is the response type for the
Query/AllContractState RPC method

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|models|[object]|false|none|none|
|» Model is a struct that holds a KV pair|object|false|none|none|
|»» key|string(byte)|false|none|none|
|»» value|string(byte)|false|none|none|
|pagination|object|false|none|pagination defines the pagination in the response.|
|» nextKey|string(byte)|false|none|none|
|» total|string(uint64)|false|none|none|

<h2 id="tocS_cosmwasm.wasm.v1.QueryCodeResponse">cosmwasm.wasm.v1.QueryCodeResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmwasm.wasm.v1.querycoderesponse"></a>
<a id="schema_cosmwasm.wasm.v1.QueryCodeResponse"></a>
<a id="tocScosmwasm.wasm.v1.querycoderesponse"></a>
<a id="tocscosmwasm.wasm.v1.querycoderesponse"></a>

```json
{
  "codeInfo": {
    "codeId": "string",
    "creator": "string",
    "dataHash": "string"
  },
  "data": "string"
}

```

QueryCodeResponse is the response type for the Query/Code RPC method

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|codeInfo|object|false|none|none|
|» codeId|string(uint64)|false|none|none|
|» creator|string|false|none|none|
|» dataHash|string(byte)|false|none|none|
|data|string(byte)|false|none|none|

<h2 id="tocS_cosmwasm.wasm.v1.QueryCodesResponse">cosmwasm.wasm.v1.QueryCodesResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmwasm.wasm.v1.querycodesresponse"></a>
<a id="schema_cosmwasm.wasm.v1.QueryCodesResponse"></a>
<a id="tocScosmwasm.wasm.v1.querycodesresponse"></a>
<a id="tocscosmwasm.wasm.v1.querycodesresponse"></a>

```json
{
  "codeInfos": [
    {
      "codeId": "string",
      "creator": "string",
      "dataHash": "string"
    }
  ],
  "pagination": {
    "nextKey": "string",
    "total": "string"
  }
}

```

QueryCodesResponse is the response type for the Query/Codes RPC method

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|codeInfos|[object]|false|none|none|
|» CodeInfoResponse contains code meta data from CodeInfo|object|false|none|none|
|»» codeId|string(uint64)|false|none|none|
|»» creator|string|false|none|none|
|»» dataHash|string(byte)|false|none|none|
|pagination|object|false|none|pagination defines the pagination in the response.|
|» nextKey|string(byte)|false|none|none|
|» total|string(uint64)|false|none|none|

<h2 id="tocS_cosmwasm.wasm.v1.QueryContractHistoryResponse">cosmwasm.wasm.v1.QueryContractHistoryResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmwasm.wasm.v1.querycontracthistoryresponse"></a>
<a id="schema_cosmwasm.wasm.v1.QueryContractHistoryResponse"></a>
<a id="tocScosmwasm.wasm.v1.querycontracthistoryresponse"></a>
<a id="tocscosmwasm.wasm.v1.querycontracthistoryresponse"></a>

```json
{
  "entries": [
    {
      "operation": "CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED",
      "codeId": "string",
      "updated": {
        "blockHeight": "string",
        "txIndex": "string"
      },
      "msg": "string"
    }
  ],
  "pagination": {
    "nextKey": "string",
    "total": "string"
  }
}

```

QueryContractHistoryResponse is the response type for the
Query/ContractHistory RPC method

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[object]|false|none|none|
|» operation|string|false|none|- CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED: ContractCodeHistoryOperationTypeUnspecified placeholder for empty value<br> - CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT: ContractCodeHistoryOperationTypeInit on chain contract instantiation<br> - CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE: ContractCodeHistoryOperationTypeMigrate code migration<br> - CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS: ContractCodeHistoryOperationTypeGenesis based on genesis data|
|» codeId|string(uint64)|false|none|none|
|» updated|object|false|none|Updated Tx position when the operation was executed.|
|»» blockHeight|string(uint64)|false|none|none|
|»» txIndex|string(uint64)|false|none|none|
|» msg|string(byte)|false|none|none|
|pagination|object|false|none|pagination defines the pagination in the response.|
|» nextKey|string(byte)|false|none|none|
|» total|string(uint64)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|operation|CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED|
|operation|CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT|
|operation|CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE|
|operation|CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS|

<h2 id="tocS_cosmwasm.wasm.v1.QueryContractInfoResponse">cosmwasm.wasm.v1.QueryContractInfoResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmwasm.wasm.v1.querycontractinforesponse"></a>
<a id="schema_cosmwasm.wasm.v1.QueryContractInfoResponse"></a>
<a id="tocScosmwasm.wasm.v1.querycontractinforesponse"></a>
<a id="tocscosmwasm.wasm.v1.querycontractinforesponse"></a>

```json
{
  "address": "string",
  "contractInfo": {
    "codeId": "string",
    "creator": "string",
    "admin": "string",
    "label": "string",
    "created": {
      "blockHeight": "string",
      "txIndex": "string"
    },
    "ibcPortId": "string",
    "extension": {
      "@type": "string",
      "property1": null,
      "property2": null
    }
  }
}

```

QueryContractInfoResponse is the response type for the Query/ContractInfo RPC
method

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|false|none|none|
|contractInfo|object|false|none|none|
|» codeId|string(uint64)|false|none|none|
|» creator|string|false|none|none|
|» admin|string|false|none|none|
|» label|string|false|none|Label is optional metadata to be stored with a contract instance.|
|» created|object|false|none|AbsoluteTxPosition is a unique transaction position that allows for global<br>ordering of transactions.|
|»» blockHeight|string(uint64)|false|none|none|
|»» txIndex|string(uint64)|false|none|none|
|» ibcPortId|string|false|none|none|
|» extension|object|false|none|`Any` contains an arbitrary serialized protocol buffer message along with a<br>URL that describes the type of the serialized message.<br><br>Protobuf library provides support to pack/unpack Any values in the form<br>of utility functions or additional generated methods of the Any type.<br><br>Example 1: Pack and unpack a message in C++.<br><br>    Foo foo = ...;<br>    Any any;<br>    any.PackFrom(foo);<br>    ...<br>    if (any.UnpackTo(&foo)) {<br>      ...<br>    }<br><br>Example 2: Pack and unpack a message in Java.<br><br>    Foo foo = ...;<br>    Any any = Any.pack(foo);<br>    ...<br>    if (any.is(Foo.class)) {<br>      foo = any.unpack(Foo.class);<br>    }<br><br> Example 3: Pack and unpack a message in Python.<br><br>    foo = Foo(...)<br>    any = Any()<br>    any.Pack(foo)<br>    ...<br>    if any.Is(Foo.DESCRIPTOR):<br>      any.Unpack(foo)<br>      ...<br><br> Example 4: Pack and unpack a message in Go<br><br>     foo := &pb.Foo{...}<br>     any, err := anypb.New(foo)<br>     if err != nil {<br>       ...<br>     }<br>     ...<br>     foo := &pb.Foo{}<br>     if err := any.UnmarshalTo(foo); err != nil {<br>       ...<br>     }<br><br>The pack methods provided by protobuf library will by default use<br>'type.googleapis.com/full.type.name' as the type URL and the unpack<br>methods only use the fully qualified type name after the last '/'<br>in the type URL, for example "foo.bar.com/x/y.z" will yield type<br>name "y.z".<br><br><br>JSON<br>====<br>The JSON representation of an `Any` value uses the regular<br>representation of the deserialized, embedded message, with an<br>additional field `@type` which contains the type URL. Example:<br><br>    package google.profile;<br>    message Person {<br>      string first_name = 1;<br>      string last_name = 2;<br>    }<br><br>    {<br>      "@type": "type.googleapis.com/google.profile.Person",<br>      "firstName": <string>,<br>      "lastName": <string><br>    }<br><br>If the embedded message type is well-known and has a custom JSON<br>representation, that representation will be embedded adding a field<br>`value` which holds the custom JSON in addition to the `@type`<br>field. Example (for message [google.protobuf.Duration][]):<br><br>    {<br>      "@type": "type.googleapis.com/google.protobuf.Duration",<br>      "value": "1.212s"<br>    }|
|»» **additionalProperties**|any|false|none|none|
|»» @type|string|false|none|A URL/resource name that uniquely identifies the type of the serialized<br>protocol buffer message. This string must contain at least<br>one "/" character. The last segment of the URL's path must represent<br>the fully qualified name of the type (as in<br>`path/google.protobuf.Duration`). The name should be in a canonical form<br>(e.g., leading "." is not accepted).<br><br>In practice, teams usually precompile into the binary all types that they<br>expect it to use in the context of Any. However, for URLs which use the<br>scheme `http`, `https`, or no scheme, one can optionally set up a type<br>server that maps type URLs to message definitions as follows:<br><br>* If no scheme is provided, `https` is assumed.<br>* An HTTP GET on the URL must yield a [google.protobuf.Type][]<br>  value in binary format, or produce an error.<br>* Applications are allowed to cache lookup results based on the<br>  URL, or have them precompiled into a binary to avoid any<br>  lookup. Therefore, binary compatibility needs to be preserved<br>  on changes to types. (Use versioned type names to manage<br>  breaking changes.)<br><br>Note: this functionality is not currently available in the official<br>protobuf release, and it is not used for type URLs beginning with<br>type.googleapis.com.<br><br>Schemes other than `http`, `https` (or the empty scheme) might be<br>used with implementation specific semantics.|

<h2 id="tocS_cosmwasm.wasm.v1.QueryContractsByCodeResponse">cosmwasm.wasm.v1.QueryContractsByCodeResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmwasm.wasm.v1.querycontractsbycoderesponse"></a>
<a id="schema_cosmwasm.wasm.v1.QueryContractsByCodeResponse"></a>
<a id="tocScosmwasm.wasm.v1.querycontractsbycoderesponse"></a>
<a id="tocscosmwasm.wasm.v1.querycontractsbycoderesponse"></a>

```json
{
  "contracts": [
    "string"
  ],
  "pagination": {
    "nextKey": "string",
    "total": "string"
  }
}

```

QueryContractsByCodeResponse is the response type for the
Query/ContractsByCode RPC method

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contracts|[string]|false|none|none|
|pagination|object|false|none|pagination defines the pagination in the response.|
|» nextKey|string(byte)|false|none|none|
|» total|string(uint64)|false|none|none|

<h2 id="tocS_cosmwasm.wasm.v1.QueryPinnedCodesResponse">cosmwasm.wasm.v1.QueryPinnedCodesResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmwasm.wasm.v1.querypinnedcodesresponse"></a>
<a id="schema_cosmwasm.wasm.v1.QueryPinnedCodesResponse"></a>
<a id="tocScosmwasm.wasm.v1.querypinnedcodesresponse"></a>
<a id="tocscosmwasm.wasm.v1.querypinnedcodesresponse"></a>

```json
{
  "codeIds": [
    "string"
  ],
  "pagination": {
    "nextKey": "string",
    "total": "string"
  }
}

```

QueryPinnedCodesResponse is the response type for the
Query/PinnedCodes RPC method

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|codeIds|[string]|false|none|none|
|pagination|object|false|none|pagination defines the pagination in the response.|
|» nextKey|string(byte)|false|none|none|
|» total|string(uint64)|false|none|none|

<h2 id="tocS_cosmwasm.wasm.v1.QueryRawContractStateResponse">cosmwasm.wasm.v1.QueryRawContractStateResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmwasm.wasm.v1.queryrawcontractstateresponse"></a>
<a id="schema_cosmwasm.wasm.v1.QueryRawContractStateResponse"></a>
<a id="tocScosmwasm.wasm.v1.queryrawcontractstateresponse"></a>
<a id="tocscosmwasm.wasm.v1.queryrawcontractstateresponse"></a>

```json
{
  "data": "string"
}

```

QueryRawContractStateResponse is the response type for the
Query/RawContractState RPC method

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|string(byte)|false|none|none|

<h2 id="tocS_cosmwasm.wasm.v1.QuerySmartContractStateResponse">cosmwasm.wasm.v1.QuerySmartContractStateResponse</h2>
<!-- backwards compatibility -->
<a id="schemacosmwasm.wasm.v1.querysmartcontractstateresponse"></a>
<a id="schema_cosmwasm.wasm.v1.QuerySmartContractStateResponse"></a>
<a id="tocScosmwasm.wasm.v1.querysmartcontractstateresponse"></a>
<a id="tocscosmwasm.wasm.v1.querysmartcontractstateresponse"></a>

```json
{
  "data": "string"
}

```

QuerySmartContractStateResponse is the response type for the
Query/SmartContractState RPC method

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|string(byte)|false|none|none|

<h2 id="tocS_ibc.applications.transfer.v1.DenomTrace">ibc.applications.transfer.v1.DenomTrace</h2>
<!-- backwards compatibility -->
<a id="schemaibc.applications.transfer.v1.denomtrace"></a>
<a id="schema_ibc.applications.transfer.v1.DenomTrace"></a>
<a id="tocSibc.applications.transfer.v1.denomtrace"></a>
<a id="tocsibc.applications.transfer.v1.denomtrace"></a>

```json
{
  "path": "string",
  "baseDenom": "string"
}

```

DenomTrace contains the base denomination for ICS20 fungible tokens and the
source tracing information path.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|path|string|false|none|path defines the chain of port/channel identifiers used for tracing the<br>source of the fungible token.|
|baseDenom|string|false|none|base denomination of the relayed fungible token.|

<h2 id="tocS_ibc.applications.transfer.v1.MsgTransferResponse">ibc.applications.transfer.v1.MsgTransferResponse</h2>
<!-- backwards compatibility -->
<a id="schemaibc.applications.transfer.v1.msgtransferresponse"></a>
<a id="schema_ibc.applications.transfer.v1.MsgTransferResponse"></a>
<a id="tocSibc.applications.transfer.v1.msgtransferresponse"></a>
<a id="tocsibc.applications.transfer.v1.msgtransferresponse"></a>

```json
{}

```

MsgTransferResponse defines the Msg/Transfer response type.

### Properties

*None*

<h2 id="tocS_ibc.applications.transfer.v1.Params">ibc.applications.transfer.v1.Params</h2>
<!-- backwards compatibility -->
<a id="schemaibc.applications.transfer.v1.params"></a>
<a id="schema_ibc.applications.transfer.v1.Params"></a>
<a id="tocSibc.applications.transfer.v1.params"></a>
<a id="tocsibc.applications.transfer.v1.params"></a>

```json
{
  "sendEnabled": true,
  "receiveEnabled": true
}

```

Params defines the set of IBC transfer parameters.
NOTE: To prevent a single token from being transferred, set the
TransfersEnabled parameter to true and then set the bank module's SendEnabled
parameter for the denomination to false.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sendEnabled|boolean|false|none|send_enabled enables or disables all cross-chain token transfers from this<br>chain.|
|receiveEnabled|boolean|false|none|receive_enabled enables or disables all cross-chain token transfers to this<br>chain.|

<h2 id="tocS_ibc.applications.transfer.v1.QueryDenomTraceResponse">ibc.applications.transfer.v1.QueryDenomTraceResponse</h2>
<!-- backwards compatibility -->
<a id="schemaibc.applications.transfer.v1.querydenomtraceresponse"></a>
<a id="schema_ibc.applications.transfer.v1.QueryDenomTraceResponse"></a>
<a id="tocSibc.applications.transfer.v1.querydenomtraceresponse"></a>
<a id="tocsibc.applications.transfer.v1.querydenomtraceresponse"></a>

```json
{
  "denomTrace": {
    "path": "string",
    "baseDenom": "string"
  }
}

```

QueryDenomTraceResponse is the response type for the Query/DenomTrace RPC
method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|denomTrace|object|false|none|DenomTrace contains the base denomination for ICS20 fungible tokens and the<br>source tracing information path.|
|» path|string|false|none|path defines the chain of port/channel identifiers used for tracing the<br>source of the fungible token.|
|» baseDenom|string|false|none|base denomination of the relayed fungible token.|

<h2 id="tocS_ibc.applications.transfer.v1.QueryDenomTracesResponse">ibc.applications.transfer.v1.QueryDenomTracesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaibc.applications.transfer.v1.querydenomtracesresponse"></a>
<a id="schema_ibc.applications.transfer.v1.QueryDenomTracesResponse"></a>
<a id="tocSibc.applications.transfer.v1.querydenomtracesresponse"></a>
<a id="tocsibc.applications.transfer.v1.querydenomtracesresponse"></a>

```json
{
  "denomTraces": [
    {
      "path": "string",
      "baseDenom": "string"
    }
  ],
  "pagination": {
    "nextKey": "string",
    "total": "string"
  }
}

```

QueryConnectionsResponse is the response type for the Query/DenomTraces RPC
method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|denomTraces|[object]|false|none|denom_traces returns all denominations trace information.|
|» path|string|false|none|path defines the chain of port/channel identifiers used for tracing the<br>source of the fungible token.|
|» baseDenom|string|false|none|base denomination of the relayed fungible token.|
|pagination|object|false|none|pagination defines the pagination in the response.|
|» nextKey|string(byte)|false|none|none|
|» total|string(uint64)|false|none|none|

<h2 id="tocS_ibc.applications.transfer.v1.QueryParamsResponse">ibc.applications.transfer.v1.QueryParamsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaibc.applications.transfer.v1.queryparamsresponse"></a>
<a id="schema_ibc.applications.transfer.v1.QueryParamsResponse"></a>
<a id="tocSibc.applications.transfer.v1.queryparamsresponse"></a>
<a id="tocsibc.applications.transfer.v1.queryparamsresponse"></a>

```json
{
  "params": {
    "sendEnabled": true,
    "receiveEnabled": true
  }
}

```

QueryParamsResponse is the response type for the Query/Params RPC method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|params|object|false|none|params defines the parameters of the module.|
|» sendEnabled|boolean|false|none|send_enabled enables or disables all cross-chain token transfers from this<br>chain.|
|» receiveEnabled|boolean|false|none|receive_enabled enables or disables all cross-chain token transfers to this<br>chain.|

<h2 id="tocS_ibc.core.client.v1.Height">ibc.core.client.v1.Height</h2>
<!-- backwards compatibility -->
<a id="schemaibc.core.client.v1.height"></a>
<a id="schema_ibc.core.client.v1.Height"></a>
<a id="tocSibc.core.client.v1.height"></a>
<a id="tocsibc.core.client.v1.height"></a>

```json
{
  "revisionNumber": "string",
  "revisionHeight": "string"
}

```

Height is a monotonically increasing data type
that can be compared against another Height for the purposes of updating and
freezing clients

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|revisionNumber|string(uint64)|false|none|none|
|revisionHeight|string(uint64)|false|none|none|

