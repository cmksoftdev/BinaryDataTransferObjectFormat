# BinaryDataTransferObject

<br>

* Introduction
* Format
* Header
* Object
* Mapping
* Arrays
* JavaScript implementation
* PHP implementation
* C# implementation

<br>

## Introduction

BinaryDataTransferObject is a experimental data format to send and receive binary data via HTTP.

<br>

## Format

The format looks like this:

<br>

Header (includes the meta data of the object)

<br>

BinaryObject_1, BinaryObject_1, ... BinaryObject_n

<br>

Checksum

<br>

## Header

<br>

The header includes the mata data of every object type and the index of every object.

<br>

![alt text](http://cmk.bplaced.net/pictures/bdtof_header.png "Header")

<br>

![alt text](http://cmk.bplaced.net/pictures/bdtof_omd.png "Header")

<br>

## Object

<br>

![alt text](http://cmk.bplaced.net/pictures/bdtof_od.png "Header")

<br>