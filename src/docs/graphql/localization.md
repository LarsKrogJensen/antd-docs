# Localization

The Kambi Statistics GraphQL API is fully localized and accepts the [HTTP Accept-Language](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language) to choose language.

If none or an unsupported locale is specified, the default `en_GB` will be used.

```bash
$ curl -X POST \
-H "Accept-Language: fr_FR" \
--data '
{
    meetings(sport: "gallops") {        
        nodes {
           id
        }
    }
}'
```

The response always contains the `Content_Language` HTTP header that specifies the language used in the response.

### Per field localization

Localized fields supports the optional `language` argument as a way to override the default language,
or to provide additional translation.

Example below is using GraphQL [alias](http://graphql.org/learn/queries/#aliases) to provide an additional translation.

::: explorer
 {
   meetings(sport: "gallops", first: 1) {
     nodes {
       id
       context {
         sport {
           name
           frenchName: name(language: "fr_FR")
         }
       }
     }
   }
 }
:::


### Supported locales

|Language                 | Locale|
|-------------------------|-------|
|English (United Kingdom) |en_GB|
|English (Australia)      |en_AU|
|Bulgarian (Bulgaria)     |bg_BG|
|Croatian (Croatia)       |hr_HR|
|Czech (Czech Republic)   |cs_CZ|
|Danish (Denmark)         |da_DK|
|Dutch (Netherlands)      |nl_NL|
|Dutch (Belgium)          |nl_BE|
|Estonian (Estonia)       |et_EE|
|Finnish (Finland)        |fi_FI|
|French (France)          |fr_FR|
|French (Belgium)         |fr_BE|
|French (Switzerland)     |fr_CH|
|Georgian (Georgia)       |ka_GE|
|German (Germany)         |de_DE|
|German (Austria)         |de_AT|
|German (Switzerland)     |de_CH|
|Greek (Greece)           |el_GR|
|Hungarian (Hungary)      |hu_HU|
|Italian (Italy)          |it_IT|
|Latvian (Latvia)         |lv_LV|
|Lithuanian (Lithuania)   |lt_LT|
|Norwegian (Norway)       |no_NO|
|Polish (Poland)          |pl_PL|
|Portuguese (Portugal)    |pt_PT|
|Portuguese (Brazil)      |pt_BR|
|Romanian (Romania)       |ro_RO|
|Russian (Russia)         |ru_RU|
|Spanish (Spain)          |es_ES|
|Spanish (Chile)          |es_CL|
|Spanish (Colombia)       |es_CO|
|Spanish (Mexico)         |es_MX|
|Spanish (Peru)           |es_PE|
|Swedish (Sweden)         |sv_SE|
|Turkish (Turkey)         |tr_TR|



