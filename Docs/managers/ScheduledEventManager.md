---
title: ScheduledEventManager
sidebar:
  order: 38
---



## ScheduledEventManager ⇐ <code>Base</code>
Represents a Scheduled Event Manager that handles creating, editing, and deleting scheduled events for a guild.

**Kind**: global class  
**Extends**: <code>Base</code>  

* [ScheduledEventManager](#ScheduledEventManager) ⇐ <code>Base</code>
    * [new ScheduledEventManager(client)](#new_ScheduledEventManager_new)
    * _instance_
        * [.cache](#ScheduledEventManager+cache) ⇒
        * [._add(events, [guildId], [options])](#ScheduledEventManager+_add) ⇒ <code>GuildScheduledEvent</code> \| <code>null</code>
        * [.create([options])](#ScheduledEventManager+create) ⇒ <code>Promise</code>
        * [.edit(event, [options])](#ScheduledEventManager+edit) ⇒ <code>Promise.&lt;Object&gt;</code>
        * [.delete(event)](#ScheduledEventManager+delete) ⇒ <code>Promise.&lt;Object&gt;</code>
        * [.fetch(events, options)](#ScheduledEventManager+fetch) ⇒ <code>Promise</code>
        * [._fetchId(events, [cache], [force])](#ScheduledEventManager+_fetchId) ⇒ <code>Promise.&lt;Event&gt;</code>
    * _static_
        * [.transformOptions(o, [create])](#ScheduledEventManager.transformOptions) ⇒ <code>Promise.&lt;Object&gt;</code>

<a name="new_ScheduledEventManager_new"></a>

### new ScheduledEventManager(client)
Constructs a new instance of the class.


| Param | Type | Description |
| --- | --- | --- |
| client | <code>Client</code> | The client object used for communication with the server. |

<a name="ScheduledEventManager+cache"></a>

### scheduledEventManager.cache ⇒
Getter method for the cache property.

**Kind**: instance property of [<code>ScheduledEventManager</code>](#ScheduledEventManager)  
**Returns**: The Collection object representing the cache.  
<a name="ScheduledEventManager+_add"></a>

### scheduledEventManager.\_add(events, [guildId], [options]) ⇒ <code>GuildScheduledEvent</code> \| <code>null</code>
Adds an event to the guild's scheduled events.

**Kind**: instance method of [<code>ScheduledEventManager</code>](#ScheduledEventManager)  
**Returns**: <code>GuildScheduledEvent</code> \| <code>null</code> - - The added event or null if the events parameter is falsy  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| events | <code>string</code> \| <code>GuildScheduledEvent</code> |  | The event or event ID to add. |
| [guildId] | <code>string</code> | <code>&quot;this.guildId&quot;</code> | The ID of the guild to add the event to. |
| [options] | <code>object</code> | <code>{cache: true, force: false}</code> | Additional options for adding the event. |
| [options.cache] | <code>boolean</code> | <code>true</code> | Whether to cache the event. |
| [options.force] | <code>boolean</code> | <code>false</code> | Whether to force adding the event even if it already exists in the cache. |

<a name="ScheduledEventManager+create"></a>

### scheduledEventManager.create([options]) ⇒ <code>Promise</code>
Creates a scheduled event with the given options.

**Kind**: instance method of [<code>ScheduledEventManager</code>](#ScheduledEventManager)  
**Returns**: <code>Promise</code> - A promise that resolves with the created event.  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> | The options for the scheduled event. |
| [options.reason] | <code>string</code> | The reason for creating the event. |

<a name="ScheduledEventManager+edit"></a>

### scheduledEventManager.edit(event, [options]) ⇒ <code>Promise.&lt;Object&gt;</code>
Edits a scheduled event with the given options.

**Kind**: instance method of [<code>ScheduledEventManager</code>](#ScheduledEventManager)  
**Returns**: <code>Promise.&lt;Object&gt;</code> - A promise that resolves with the updated event object.  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>string</code> \| <code>Object</code> | The ID of the event or the event object itself. |
| [options] | <code>Object</code> | The options to update the event with. |
| [options.reason] | <code>string</code> | The reason for editing the event. |

<a name="ScheduledEventManager+delete"></a>

### scheduledEventManager.delete(event) ⇒ <code>Promise.&lt;Object&gt;</code>
Deletes an event from the scheduled events of a guild.

**Kind**: instance method of [<code>ScheduledEventManager</code>](#ScheduledEventManager)  
**Returns**: <code>Promise.&lt;Object&gt;</code> - - The deleted event object.  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>string</code> \| <code>Object</code> | The event to be deleted. Can be either the event ID as a string or the event object itself. |

<a name="ScheduledEventManager+fetch"></a>

### scheduledEventManager.fetch(events, options) ⇒ <code>Promise</code>
Fetches scheduled events from the server based on the provided options.

**Kind**: instance method of [<code>ScheduledEventManager</code>](#ScheduledEventManager)  
**Returns**: <code>Promise</code> - A promise that resolves with the fetched events.  

| Param | Type | Description |
| --- | --- | --- |
| events | <code>any</code> | The events to fetch. Can be an ID, an array of IDs, or an object with query options. |
| options | <code>object</code> | The options for fetching the events. |
| options.cache | <code>boolean</code> | Whether to cache the fetched events. Default is true. |
| options.force | <code>boolean</code> | Whether to force fetch the events even if they are already cached. Default is false. |

<a name="ScheduledEventManager+_fetchId"></a>

### scheduledEventManager.\_fetchId(events, [cache], [force]) ⇒ <code>Promise.&lt;Event&gt;</code>
Fetches the ID of an event from the server.

**Kind**: instance method of [<code>ScheduledEventManager</code>](#ScheduledEventManager)  
**Returns**: <code>Promise.&lt;Event&gt;</code> - - The fetched event.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| events | <code>string</code> \| <code>Event</code> |  | The ID of the event or the event object itself. |
| [cache] | <code>boolean</code> | <code>true</code> | Whether to cache the fetched event. |
| [force] | <code>boolean</code> | <code>false</code> | Whether to force fetch the event even if it is already cached. |

<a name="ScheduledEventManager.transformOptions"></a>

### ScheduledEventManager.transformOptions(o, [create]) ⇒ <code>Promise.&lt;Object&gt;</code>
Transforms the options object into the desired format based on the provided parameters.

**Kind**: static method of [<code>ScheduledEventManager</code>](#ScheduledEventManager)  
**Returns**: <code>Promise.&lt;Object&gt;</code> - - The transformed options object.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| o | <code>Object</code> |  | The options object to transform. |
| [create] | <code>boolean</code> | <code>false</code> | Indicates whether to transform the options for creating a new object. |

