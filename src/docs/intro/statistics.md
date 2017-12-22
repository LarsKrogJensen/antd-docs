# Statistics API

A meeting is a collection of races conducted by a club on the same day or night.

The API keeps statistic results for only a certain number of days after the race has finished.


## Available GraphQL queries

* _meetings_ - Collection of ongoing or recently finished meetings within a given sport
* _meeting_ - One ongoing or recently finished meeting given by "meeting id"  
* _raceResult_ - Results for one finished race event, given by Kambi event id
* _raceEvent_ - Information for one finished race event (no results), given by Kambi event id 

The below queries contains interactive explorer, which allows executing the queries and modify them including auto-completion, validation.
To get descriptions and info (format and sub-nodes) about a field, just hover with the mouse and click on the link in the tool tip.

## Query: meetings
  
  #### Prameters (mandatory)
  * _sport_ - exactly one sport, english name in lowercase and underscore instead of white space, e.g. "gallops"

  #### Parameters (optional)
  This is a collection and supports [pagination](#/docs/graphql/pagination), accepting the additional optional parameters, _first_, _last_, _after_ and _before_.

  #### Query structure
  * _nodes_ - the actual meeting notes with all its content. Use interative explorer to find out the details including structure description.
  * _edges_ - pagination information
  * _pageInfo_ - pagination information

  #### Interactive example
  Example query, returning all gallop meetings, together with meeting ID, course name and the start time of all the races (events) within the meeting.

::: explorer
 {
   meetings(sport: "gallops") {
     nodes {
       id
       context {
         course {
            name
         }
       }
       events {
         originalStartTime
       }
     }
   }
 }
:::


## Query: meeting

  #### Parameters (mandatory)
  * _meetingId_ - Meeting Id for a specific meeting    

  #### Interactive example
  Example query, for given meeting, returns course name and its races (events), together with Kambi Event ID and start time of the race.

::: explorer
 {
   meeting(meetingId: "3218") {
     context {
       course {
         name
       }
     }
     events {
       id
       originalStartTime
     }
   }
 }
:::

## Query: raceResult
  #### Parameters (mandatory)
  * _eventId_ - Kambi Event Id for race results for a specific race    

  #### Interactive example
  Example query, for given event (race), returns every horse, place (if they got placed) and Kambi Participant Id.

::: explorer
{
  raceResult(eventId: 1003164450) {
    participantResults {
      place
      participantId
    }
  }
}
:::
 

## Query: raceEvent
  #### Parameters (mandatory)
  * _eventId_ - Kambi Event Id for race information for a specific race    

  #### Interactive example
  Example query, for given event (race), returns for every running horses (participants), its Kambi Participant Id and name.

::: explorer
{
  raceEvent(eventId: 1003164450) {
    meta {
      participants {
        id
        participantName
      }
    }
  }
}
:::
